package hello.hellospring;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    //정형화된 컨트롤러, 서비스, 리포지토리 같은 코드는 컴포넌트 스캔을 사용한다
    //정형화 되지 않거나, 상황에 따라 구현 클래스를 변경해야 하면 설정을 통해 스프링 빈으로 등록한다.

//    @Autowired 를 통한 DI는 helloController , memberService 등과 같이 스프링이 관리하
//    는 객체에서만 동작한다. 스프링 빈으로 등록하지 않고 내가 직접 생성한 객체에서는 동작하지 않는다.

//    @Bean
//    public MemberService memberService() {
//        return new MemberService(memberRepository());
//    }
//
//    @Bean
//    public MemoryMemberRepository memberRepository(){
//        return new MemoryMemberRepository();
//    }
}
