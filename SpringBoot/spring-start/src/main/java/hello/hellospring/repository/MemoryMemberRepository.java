package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;

//실제 구현체
@Repository
public class MemoryMemberRepository implements MemberRepository {

    private static Map<Long,Member> store = new HashMap<>();

    //순차적으로 정수값을 자동으로 생성하는 객체
    private static long sequence = 0L;

    @Override
    public Member save(Member member) {
        member.setId(++sequence); //회원번호 넣고
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Member> findByName(String name) {
     return store.values().stream()
             .filter(m->m.getName().equals(name))
             .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore(){
        store.clear();
    }
}
