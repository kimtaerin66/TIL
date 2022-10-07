package study2;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;


public class CSVreader {
	

	public CSVreader() {
	}

	public List<Student> readCSV(String fileName) throws IOException {
		List<Student> csvList = new ArrayList<Student>(); // Student가 list로 있는 상태.
		File fileCsv = new File(fileName);
		BufferedReader br = null;

		String line = "";

		try {
			br = new BufferedReader(new FileReader(fileCsv));
			br.readLine();
			while ((line = br.readLine()) != null) { // 데이터가 없을때까지 한줄씩 읽어오기.
				String[] lineArr = line.split(","); // 한줄씩 읽어온것은 콤마로 나눔.
				Student item = new Student(lineArr[0], Integer.parseInt(lineArr[1]), Integer.parseInt(lineArr[2]),
						Integer.parseInt(lineArr[3]), Integer.parseInt(lineArr[4]), Integer.parseInt(lineArr[5]));
				if(lineArr !=null) {
					csvList.add(item);
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} finally {
			br.close();
		}
		return csvList;
		
		
	}

	public static void main(String[] args) throws IOException {
		CSVreader csvrd = new CSVreader();
		csvrd.readCSV("D:/study/Java/학생성적표.csv");
	
	}
}
