package study1;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;


import javax.swing.JOptionPane;

public class StudentList {

	
	public static void main(String[] args) throws IOException {
	
		
		//학생들의 성적표가 담긴 list
         ArrayList<Student> list = new ArrayList<Student>();

		//초기 학생수 입력 필요
		String inputCount  = JOptionPane.showInputDialog("학생 수를 입력해주세요.");
		int  getCount= Integer.parseInt(inputCount);

   	   for(int i=0; i < getCount; i++) {
   		   list.add(new Student());
       }
   	   
 	  //평균값으로 정렬 
   	Comparator<Student> comparator = new Comparator<Student>() {
   		@Override
   		public int compare(Student o1, Student o2) {
   				return o2.getAverage()  - o1.getAverage();
   		}	
   	};
  	System.out.println("정렬 전" + list); //정렬 전
   	Collections.sort(list, comparator);
   	System.out.println("정렬 후" + list); //정렬 후

   	
   	//csv파일로 저장하기
    // 생성할 파일의 경로 및 파일명 으로 File 객체 생성
    File file = new File("D:/study/Java/학생성적표.csv");
    FileWriter fw = new FileWriter(file);
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "MS949"));
    bw.write("이름,국어,수학,영어,국사,평균");
    bw.newLine();
    
   for(int i=0; i<list.size();i++) {
	   bw.write(list.get(i)+",");
       bw.newLine();
   }
   bw.close();
   fw.close();
	}
	}//main
	

