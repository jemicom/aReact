// const { user_id, user_pw } = req.body;
// 전개연산자
// const ary = [1,2,3,4]
// const [ one, two , ...rest] = ary;
// one = 1, two = 2 , rest = [3,4]

// props = { name, age, subject }
const Section = ({ age }) => {
  const str = ""; // 화면을 갱신하지 않음

  return (
    <section>
      <h2>성인 인증{age}</h2>
      <p>
        {/* {
          if(age>=20){
            str = "성인입니다."
          }else{
            str = "20이상만 입장가능합니다."
          }
        } */}
        {age >= 20 ? "성인입니다." : "20이상만 입장가능합니다."}
      </p>
    </section>
  );
};

export default Section;

// 포폴은 리엑트 타입으로도 나왔으면 합니다.
