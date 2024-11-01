package hello.hellospring.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

//모든 메소드 실행시, 실행시간을 측정하는 기능
@Component
@Aspect
public class TimeTraceAop {
    @Around("execution(* hello.hellospring..*(..))")
    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable {

        long start = System.currentTimeMillis();//시작시간
        System.out.println("start : "+ joinPoint.toString());

        try{
            return joinPoint.proceed();
        }finally {
            long end = System.currentTimeMillis();
            long duration = end - start;

            System.out.println("end : "+joinPoint.toString()+" duration : "+duration);
        }
    }
}
