package hello.servlet.basic.response;

import jakarta.servlet.ServletException;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

@WebServlet(name = "responseHeaderServlet", urlPatterns = "/response-header")
public class ResponseHeaderServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        res.setStatus(HttpServletResponse.SC_OK); //200

        //header
        res.setHeader("Content-Type", "text/plain; charset=UTF-8");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("my-header","hello");

        //편의 메소드
        content(res);
        cookie(res);
        redirect(res);

        //message body
        PrintWriter writer = res.getWriter();
        writer.println("ok");

    }

    private void content(HttpServletResponse res) throws IOException {
        res.setContentType("text/plain");
        res.setCharacterEncoding("UTF-8");
    }

    private void cookie(HttpServletResponse res) throws IOException {
        Cookie cookie = new Cookie("myCookie", "good");
        cookie.setMaxAge(600); //600초 쿠키는 유효기간이있다.
        res.addCookie(cookie);
    }

    private void redirect(HttpServletResponse res) throws IOException {
        res.sendRedirect("/basic/hello-form.html");
    }
}
