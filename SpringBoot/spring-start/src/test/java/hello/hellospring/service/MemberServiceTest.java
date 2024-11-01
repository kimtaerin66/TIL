package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MemberServiceTest {
    MemberService memberService;
    MemoryMemberRepository memberRepository;


    //테스트가 서로 영향이 없도록 항상 새로운 객체 생성.
    @BeforeEach
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }

    @AfterEach
    public void afterEach(){
        memberRepository.clearStore();
    }

    @Test
    public void join(){
        Member member = new Member();
        member.setName("hello");

        memberService.join(member);
        Member result = memberRepository.findById(member.getId()).get();
        Assertions.assertEquals(member.getName(), result.getName());
    }

    @Test
    public void duplicateMember(){
        Member member1 = new Member();
        member1.setName("hello1");

        Member member2 = new Member();
        member2.setName("hello1");

        memberService.join(member1);
        IllegalStateException e = Assertions.assertThrows(IllegalStateException.class,
                () -> memberService.join(member2)); //예외가 발생해야한다.

        Assertions.assertEquals(e.getMessage(),"이미 존재하는 회원입니다.");

    }
}
