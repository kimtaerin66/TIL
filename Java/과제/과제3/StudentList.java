package study2;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;


import javax.swing.JOptionPane;

public class StudentList {

	
  public  StudentList(){  }
 
		
public static void main(String[] args) throws IOException {
	ArrayList<Student> list = new ArrayList<Student>();
	  for(int i=0; i < 30; i++) {	//학생 수 30고정;
	     	 list.add(new Student());
	  }
 	//csv파일로 저장하기
    // 생성할 파일의 경로 및 파일명 으로 File 객체 생성
    File file = new File("D:/study/Java/학생성적표.csv");
    FileWriter fw = new FileWriter(file);
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "utf-8"));   bw.write("이름,국어,수학,영어,국사,평균");
    bw.newLine();


   for(Student s : list) {
      bw.write(s.toString());
       bw.newLine();
   }
   bw.close();
   fw.close();

}}//main

