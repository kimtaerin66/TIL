package study2;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Scanner;


public class StudentMap {


	public StudentMap() {}
	
	public static void main(String[] args) throws IOException {
		CSVreader csvReader 		= new CSVreader();
		
		//읽어온 파일을 stuList에 담기
		List<Student> 	stuList 	= csvReader.readCSV("D:/study/Java/학생성적표.csv");
	
		//map생성. key=이름 또는 성, value= Student.
		Map<String, Student> stdMap = new HashMap<String, Student> ();
		
       for( Student item : stuList) {
		stdMap.put(item.getName(), item);
	}
       	System.out.println(stdMap);
       
       	
      
		
       	Scanner sc = new Scanner(System.in);
		System.out.println("이름 또는 성을 입력하세요");
       	
      //user가 입력한 값.
     	String inName = "신";
     	
       //찾은 값을 넣을 list.
		List<Student> 	stuResultList = new ArrayList<Student>();
		// Map For 문
		for(String key : stdMap.keySet() ) {
			if(key.contains(inName)) {
				stuResultList.add(stdMap.get(key));
			}
			
		}
    	System.out.println(stuResultList);

//		if( stuResultList.size() > 0 ) {
//			// 출력
//		}

		

	}

}
