package study2;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class CSVreader {
	public List<List<String>> readCSV() {
		List<List<String>> csvList = new ArrayList<List<String>>();
		File csv = new File("D:/study/학생성적표.csv");
		BufferedReader br = null;
		String line = "";

		try {
			br = new BufferedReader(new FileReader(csv));
			while ((line = br.readLine()) != null) { // 데이터가 없을때까지 한줄씩 읽어옴.
				List<String> aLine = new ArrayList<String>();
				String[] lineArr = line.split(","); // 한 줄을 ,로 나누어배열에 저장> 리스트로 변환.
				aLine = Arrays.asList(lineArr);
				csvList.add(aLine);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null) {
					br.close(); // 사용 후 BufferedReader닫기
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return csvList;
	}
}
