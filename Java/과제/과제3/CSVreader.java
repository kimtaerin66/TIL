package study2;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class CSVreader {
	
	public CSVreader() {}
	
	public List<Student> readCSV(String fileName) throws IOException {
		 List<Student> csvList = new ArrayList<Student>(); //Student가 list로 있는 상태.
		File fileCsv = new File(fileName); 
		BufferedReader br = null;
		
		String line = "";
		
	
		try {
		br = new BufferedReader(new FileReader(fileCsv));

		while ((line = br.readLine()) != null) {  //데이터가 없을때까지 한줄씩 읽어오기.
			   String[] lineArr = line.split(","); //한줄씩 읽어온것은 콤마로 나눔.
				  List<String> sList = new ArrayList<String>(); //받아온것을 저장.
				  sList = Arrays.asList(lineArr); //arrayList로 변환.
				  
				  System.out.println(sList);
		for(String col : sList) {
				  System.out.println(sList);
			}
				
			//map<키, 값> 변수명 = new HashMap<키, 값>();  키 = 성또는 이름, 값 = Student
		
			}
		}catch(FileNotFoundException e) {
			e.printStackTrace();
		}finally {
			br.close(); 
		}
		return csvList;
		}
	
	
	public static void main(String[] args) throws IOException {
		CSVreader csvrd = new CSVreader();
		csvrd.readCSV("D:/study/Java/학생성적표.csv");
	}
}
//		try {
//			br = new BufferedReader(new FileReader(fileCsv)); //파일을 읽어오는데
//			while ((line = br.readLine()) != null) { // 데이터가 없을때까지 한줄씩 읽어옴.
//				List<String> aLine = new ArrayList<String>();
//				String[] lineArr = line.split(","); // 한 줄을 ,로 나누어배열에 저장> 리스트로 변환.
//				aLine = Arrays.asList(lineArr);
//				csvList.add(aLine);
//			}
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if (br != null) {
//					br.close(); // 사용 후 BufferedReader닫기
//				}
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//		return csvList;
//	}
//	
//	public List<Student>		readCSV_ex(String fileName) {
//		List<Student> csvList 	= new ArrayList<Student> ();
//		File fileCsv 						= new File(fileName);
//		BufferedReader br 		= null;
//		
//		String line = "";
//
//		try {
//			br = new BufferedReader(new FileReader(fileCsv));
//			
//			while ((line = br.readLine()) != null) { // 데이터가 없을때까지 한줄씩 읽어옴.
//				String[] lineArr 		= line.split(","); // 한 줄을 ,로 나누어배열에 저장> 리스트로 변환.
//				
//				Student item = new Student ();  
//				for(String col : lineArr ) {
//					// 파싱된 결과값 -> Student 저장
//					
//				}
//				if( lineArr != null ) {
//					csvList.add(item);
//				}
//			}
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		} finally {
//			if (br != null) {
//				br.close(); // 사용 후 BufferedReader닫기
//		}
//			
//		return csvList;
//	}
//}
