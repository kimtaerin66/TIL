package study2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Scanner;


public class StudentMap {

	private String lastName;

	public void getKey() {
		// 사용자 입력받기
		Scanner sc = new Scanner(System.in);
		System.out.println("이름 또는 성을 입력하세요");
		this.lastName = sc.next();
	}

	public StudentMap() {
	}

	
	public static void main_ex(String[] args) {
		
		CSVreader csvReader 		= new CSVreader();
		List<Student> 	stuList 	= csvReader.readCSV_ex("../././.csv");
		
		Map<String, Student> stdMap = new HashMap<String, Student> ();
		
		for( Student item : stuList) {
			stdMap.put(item.getName(), item);
		}
		
		// 성 or 이름 입력 
		
		
		String inName = "";
		// Map For 문
		List<Student> 	stuResultList = new ArrayList<Student>();
		
		for(String key : stdMap.keySet() ) {
			if(key.contains(inName)) {
				stuResultList.add(stdMap.get(key));
			}
			
		}
		
		if( stuResultList.size() > 0 ) {
			// 출력
		}

		
		
	}
	
	public static void main(String[] args) {
// 		List<Map<String, List>> student = new ArrayList<>(); 

		CSVreader csvReader = new CSVreader();
		List<List<String>> list = csvReader.readCSV(); // csv파일 읽어오기

		//StudentMap studentMap = new StudentMap();
		//studentMap.getName(); // 입력받기

		Map<String, List<Student>> stdMap = new HashMap<String, List<Student>> ();

//		for (List<String> sList : list) {
//
//			// ex 김태린 95 80 75 50 75 key = 김, value = [김태린, 95, 80, 75, 50, 75]
//			//stdMap.put(sList.get(0).substring(0, 1), sList); //중복이 불가능 > 나중에 받은값으로 덮어씀
//		}
	
		
	    System.out.println(stdMap);
	System.out.println(stdMap.get("김"));

//
	}

}
