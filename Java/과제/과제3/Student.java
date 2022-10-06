package study2;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class Student {
	
 private String name;
 private  int math;
 private  int korean;
 private  int english;
 private  int history;
 private int avg;
 private int sum;
 
  public Student() {
	  this.name = randomHangulName();
	  this.korean = RandomScore();
	  this.math = RandomScore();
	  this.english = RandomScore();
	  this.history = RandomScore();
	  this.sum = this.math + this.korean + this.english + this.history;
	  this.avg =  this.sum /4;
  }

  
  public String getName() {
	return name;
}

public int getMath() {
	return math;
}

public int getKorean() {
	return korean;
}

public int getEnglish() {
	return english;
}

public int getHistory() {
	return history;
}

public int getAvg() {
	return avg;
}

public int getSum() {
	return sum;
}


	//메소드
	public  String randomHangulName() {   
		List<String> lastName = Arrays.asList("김", "이", "박", "최","오","신");  
		
		List<String> firstName = Arrays.asList("태린", "연지", "진이", "태현", "준상", "원호", "기표", "기현", "보경", "현", "수정", "성수", "지연", "수연", "민혁");   
		
		Collections.shuffle(lastName);  
		Collections.shuffle(firstName); 
		return lastName.get(0) + firstName.get(0);
		}   
	
	
	
	public int RandomScore() {
		return (int)(Math.random() *100) +1;
	}
	

	@Override
	public String toString() {
		return  getName() +","+ getKorean()+","  + getMath()+"," + getEnglish()+","+ getHistory()+","+getAvg();
	}
	


  
  
}
