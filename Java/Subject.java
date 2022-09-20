package first;

public class Subject {
    private int math;
    private int kor;
    private int eng;
    private int history;

    public Subject(){};

    public Subject(int math, int kor, int eng, int history){
        this.math = math;
        this.kor = kor;
        this.eng = eng;
        this.history = history;
    }

    //하나씩 set이 아닌, setScore로 random값 받아오기.
    public String getScore(){
        return setKor()+","+setEng()+","+setHistory()+","+setMath();
    }
    //get
    public int getMath() {
        return math;
    }
    public int getHistory() {
        return history;
    }
    public int getKor() {
        return kor;
    }
    public int getEng() {return eng;}
 //set
    public int setEng() {
        return  (int)(Math.random() *100)+1;
    }
    public int setKor() {
        return (int)(Math.random() *100)+1;
    }
    public int setHistory() {
        return (int)(Math.random() *100)+1;
    }
    public int setMath() {
        return (int)(Math.random() *100)+1;
    }
    //메소드

    @Override
    public String toString() {
        return getMath() + "," +getKor() + ","+getEng()+","+getHistory();
    }
}
