package first;

public class Student {
    //id는 0부터, 학생이 추가될때마다 +1
    public static int studentNum = 0;

     private int studentID;
     private String studentName;
     private String subject;

     private int avg;
     public Student(int id,String studentName){
         this.studentID = id;
         this.studentName = studentName;
         studentNum++;
     };

     public Student(int id, String studentName, String subject, int score, int avg){
         this.studentID = id;
         this.studentName = studentName;
         this.subject = subject;

         studentNum++; //Student 생성후 Num +1.

     }

    //get
    public String getStudentName()
    {return studentName;}

    public int getStudentNum(){
      return  this.studentNum;
    };

    //set
    //학생이름 랜덤으로 받기
    public String setStudentName(){
        StringBuffer rName = new StringBuffer();
        int nameLength = 3;

        for(int i =0; i < nameLength; i++) {
            char ch = (char) ((Math.random() * 11172) + 0xAC00);

            rName.append(ch);
           this.studentName = rName.toString();
        }
        return this.studentName;
    }

    @Override
    public String toString() {
        return getStudentNum()+","+ getStudentName() + Subject.;
    }


}//
