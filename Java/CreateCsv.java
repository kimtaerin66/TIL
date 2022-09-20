package first;

import java.io.*;

public class CreateCsv {
    public static void main(String[] args) throws IOException {

        //파일저장 장소와 이름 설정
        String filePath="D:/study/Java/0920.csv";
        //파일내용 각셀은 콤마, 다음 행은 "\n"으로 구분
        String text = "번호,이름,과목 \n 1,김태린,수학 \n  2,태린,국어 \n 3,태린이,영어";

        File file = new File(filePath);

        try{
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(filePath),"MS949"));
            bw.write(text);
            bw.close();
        } catch (IOException e) {
            throw e;
        };
    }
}
