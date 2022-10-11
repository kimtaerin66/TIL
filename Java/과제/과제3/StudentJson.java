package study3;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class StudentJson {

	// 필터링된 map가져와서 json으로 만들기
//	private  List<Student> stuList;
	public JSONObject result;

	


	public static void main(String[] args) throws IOException {
		//가져오기
		StudentMap stuList = new StudentMap();
		List<Student> slist = stuList.userStuList();		

		JSONArray jsonArr = new JSONArray();
		JSONObject jsonOb = new JSONObject();

		for (Student stu : slist) {
			JSONObject data = new JSONObject();
           
           
	       data.put("이름", stu.getName());
			data.put("국어", stu.getKorean());
			data.put("수학", stu.getMath());
			data.put("영어", stu.getEnglish());
			data.put("국사", stu.getHistory());
			data.put("평균", stu.getAvg());
			jsonArr.add(data);

		}
	       
		jsonOb.put("StudentList", jsonArr);

	    System.out.println(jsonOb);

	}

}
