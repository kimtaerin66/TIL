package study2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//01. List<Map<String, Student>> 로 만든다
//02. csv의 첫번째(0) 에 성만 분리해본다 [String.subString 이용]
//03. Map<String, Student> 을 만들어서 담아본다.
//04. [01]번에 만든곳에 03을 추가한다 [list.add() 이용]

public class StudentMap {

	List<Map<String, Student>> student = new ArrayList<>();
	
	public static void main(String[] args) {
		CSVreader csvReader = new CSVreader();
		List<List<String>> list = csvReader.readCSV();

		for (List<String> sList : list) {
			Map<String, Student> stdMap = new HashMap<>();
			//성,  이름,점수
			stdMap.put(sList.get(0).substring(0, 1), new Student());
			list.add((List<String>) stdMap);
		}
	}


	
}
