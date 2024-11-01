package hello.hellospring.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    //뷰 리졸버가 논리뷰이름(data)를 받아서 실제 뷰에서 value를 찾는다.
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data","spring!!!!!!");
        return "hello";
    }


    //reponseBody를 사용하면 뷰 리졸버를 사용하지 않는다.-> http요청 body에 문자내용을 직접반환한다.
    @GetMapping("hello-spring")
    @ResponseBody
    public String HelloMvc(@RequestParam("name") String name){
        return "hello " + name;
    }

    //객체반환
    @GetMapping("hello-api")
    @ResponseBody
   public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }

    static class Hello {
        private String name;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }

    
}
