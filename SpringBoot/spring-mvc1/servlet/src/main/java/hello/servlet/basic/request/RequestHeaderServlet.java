package hello.servlet.basic.request;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

//RequestServlet 사용법 예제
@WebServlet(name="requestHeaderServlet", urlPatterns = "/request-header")
public class RequestHeaderServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        printStartLine(req);
        printHeaders(req);
    }

    private void printStartLine(HttpServletRequest req) {
        System.out.println("---Request Line start---");

        System.out.println("req.getMethod() = " + req.getMethod()); //GET
        System.out.println("req.getProtocol() = " + req.getProtocol()); //HTTP/1.1

        System.out.println("req.getScheme() = " + req.getScheme()); //http
        System.out.println("req.getRequestURL() = " + req.getRequestURL()); //request-header
        System.out.println("request.getRequestURI() = " + req.getRequestURI());//username=hi
        System.out.println("request.getQueryString() = " + req.getQueryString());
        System.out.println("request.isSecure() = " + req.isSecure()); //https 사용 여부

        System.out.println("--- REQUEST-LINE - end ---");
        System.out.println();
    }

    private void printHeaders(HttpServletRequest req) {
        System.out.println("---  Headers start---");

        req.getHeaderNames().asIterator().forEachRemaining(headerName -> {
            System.out.println("headerName" + ": "
                    + req.getHeader(headerName));
        });
        System.out.println("--- Headers - end ---");
        System.out.println();
    }
}
