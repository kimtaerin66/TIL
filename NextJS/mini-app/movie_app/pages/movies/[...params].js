import { useRouter } from "next/router";
import Title from "../../components/Title";

export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params || [] ;
    return (
        <div>
            <Title title={title} />
            <h4>{title}</h4>
        </div>
    );
}
//[]을써주는 이유는 바로 detail페이지로 오면 params가 배열이란걸 모름

export function getServerSideProps({params:{params}}){
    return {
        props: {
            params,
        },
    };
}

//유저에게 절대 로딩페이지를 보여주고싶지않고,
//검색엔진에 최적화되고싶다면 getServerSideProps을 사용해라.