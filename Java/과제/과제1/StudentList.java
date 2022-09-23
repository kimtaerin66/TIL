package study1_1;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;


import javax.swing.JOptionPane;

public class StudentList {
	
	//초기 학생수 랜덤 (1~20)
	public  int count;
	
	  public  StudentList() {
		  this.count = randomCount();
	  }
	  public int randomCount() {
  	  return (int)(Math.random() *20)+1;
   }
	 
		
	public static void main(String[] args) throws IOException {
         ArrayList<Student> list = new ArrayList<Student>();
         StudentList s = new StudentList();

         //받아온 랜덤학생수만큼 Student 객체 생성하여 list에 추가
         for(int i=0; i < s.randomCount(); i++) {
        	 list.add(new Student());
         }
  
 	  //평균값으로 정렬 
   	Comparator<Student> comparator = new Comparator<Student>() {
   		@Override
   		public int compare(Student o1, Student o2) {
   			return o2.getAverage()  - o1.getAverage();
   		}	
   	};
 	//System.out.println("정렬 전" + list); //정렬 전
   	Collections.sort(list, comparator);
   //	System.out.println("정렬 후" + list); //정렬 후
   	
   	//csv파일로 저장하기
    // 생성할 파일의 경로 및 파일명 으로 File 객체 생성
    File file = new File("D:/study/Java/학생성적표.csv");
    FileWriter fw = new FileWriter(file);
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "MS949"));
   bw.write("이름,국어,수학,영어,국사,평균");
    bw.newLine();
//    
   for(int i=0; i<list.size();i++) {
   bw.write(list.get(i)+",");
       bw.newLine();
   }
   bw.close();
   fw.close();
	}
	}//main
	

