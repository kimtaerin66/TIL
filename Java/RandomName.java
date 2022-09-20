package first;

public class RandomName {
    private String userName;

    public String getUserName(){
        return userName;
    }

    public void setUserName(){
        StringBuffer rName = new StringBuffer();
        int nameLength = 3;

        for(int i =0; i < nameLength; i++){
            char ch =(char)((Math.random() * 11172) + 0xAC00);

            rName.append(ch);
            this.userName = rName.toString();
        }
    }


}
