package first;

import java.util.Arrays;
import java.util.Collections;

public class Sorting {
    //배열 정렬하기

    public static void main(String[] args){
        //오름차순
        int arr[] = {3, 5, 7, 1, 15, 13};
        Arrays.sort(arr);

        for(int i : arr) {
            System.out.print(i +" ");
        }

        //내림차순
        Integer arr2[] = {3, 5, 7, 1, 15, 13};
        Arrays.sort(arr2,Collections.reverseOrder());
        for(int i : arr2) {
            System.out.print(i +" ");
        }

    }

}
