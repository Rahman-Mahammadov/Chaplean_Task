/* eslint-disable react/prop-types */
import { Chaplean, LinkCardsList } from "../../Components";

const HomePage = ({txt}) => {
  return (
    <div className="px-10 max-[900px]:padding-x bg-primary text-white max-md:padding-x flex-grow mb-40">
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam minima praesentium nesciunt dolor doloribus, quo officiis natus in quia modi sed dolores itaque officia quae facere qui autem eaque quos.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem autem minus ratione odit, eos quidem, recusandae tempora adipisci sapiente iste corporis. Laborum delectus quis suscipit officia quos, non saepe porro sapiente blanditiis aliquid, nostrum exercitationem. Earum deleniti autem tenetur porro cupiditate. Distinctio eligendi nostrum in tempora iure. Eaque eos magnam repudiandae quibusdam possimus mollitia incidunt, delectus molestiae numquam aliquam quidem quam minima, quas illo qui neque aut reiciendis velit ipsam laboriosam! Reiciendis, magnam debitis. Dolorum rem quaerat sapiente aut nostrum optio expedita ducimus voluptatibus laboriosam aliquid, doloremque, earum necessitatibus eligendi consectetur at accusamus, blanditiis fugit! Explicabo nihil asperiores vel ut! Iure nobis quae laboriosam cupiditate molestiae ipsa fuga laborum quos facilis, voluptates autem doloremque nesciunt sequi dolores, vero laudantium, atque debitis reprehenderit consequuntur? Exercitationem ex voluptatem veniam omnis, ut animi consectetur! Tempore necessitatibus quae nulla mollitia delectus excepturi provident nam nostrum libero nobis consequuntur architecto ipsum modi, vel cupiditate rem voluptate asperiores. Deserunt minus dolorum mollitia numquam unde temporibus! Itaque vero nesciunt fugit asperiores minima corporis laboriosam excepturi sequi unde accusamus qui facere, rerum ut reiciendis dolorem ex consequuntur suscipit iusto doloremque molestias sit voluptatibus, ab eius aspernatur. Sunt corporis, distinctio recusandae accusantium saepe vero animi aperiam earum qui, sit sed ducimus quos nulla laborum iure reprehenderit necessitatibus! Aperiam, harum mollitia cumque voluptatibus at ad voluptatum fuga animi magni consectetur quam perspiciatis officiis exercitationem ut laboriosam doloribus ex asperiores id repudiandae et dolorem molestiae nostrum nulla accusamus. Fuga tempora tenetur velit sunt repellat aut delectus corrupti! Similique ab provident veniam cumque facilis sequi, beatae doloribus, nemo necessitatibus, possimus perspiciatis maiores sed corporis sunt et velit. Fugit quos libero pariatur eveniet rerum! Facilis ratione nulla culpa quis, voluptatibus velit iusto quam hic qui ex eaque amet mollitia laborum. Cum ducimus eum ut quam vero ad, nam, ab recusandae corporis voluptatibus debitis quibusdam omnis consectetur blanditiis distinctio beatae sapiente eius atque suscipit eligendi pariatur vitae. Nisi reprehenderit fugiat magnam cum atque officia in commodi aut. Beatae consequatur nesciunt quam iure consectetur inventore enim deserunt. Qui suscipit molestias at voluptas atque saepe repellendus quas delectus sequi! Deleniti laboriosam dicta aspernatur molestias consequuntur adipisci nulla id esse, explicabo mollitia quo minus accusantium enim et numquam temporibus odio accusamus quam ullam illo porro? Quibusdam natus iure, unde ut autem voluptatum neque quia laboriosam ea. Tenetur quae odit perspiciatis quam! Voluptate, a? Ratione cum voluptatibus, vel natus expedita obcaecati iusto ipsam eius provident impedit perspiciatis ea magni quam adipisci cumque repellendus quos commodi animi quia recusandae itaque, molestiae aliquid? Saepe numquam adipisci tempore ullam libero repellat porro perspiciatis debitis doloribus? Modi natus aspernatur, perferendis corporis quis placeat ab animi sint voluptatum inventore consequatur praesentium molestiae obcaecati cum mollitia impedit doloribus officiis. Voluptates quos aliquid doloribus facere necessitatibus commodi libero labore obcaecati error illo nesciunt delectus ratione cupiditate blanditiis unde atque nisi architecto, recusandae adipisci, expedita beatae reprehenderit excepturi esse. Distinctio eveniet expedita quasi quis, animi, voluptatum perferendis libero iure dolores commodi numquam fugit nisi nostrum accusantium cupiditate quo debitis quam atque. Ea nostrum voluptatum voluptatem?
        </p> */}

      <div className="intro mb-16">
        <h1 className="py-10 font-poppins text-2xl font-bold">Introduction</h1>
        <p className="text-[16px]">{txt}</p>
      </div>

      <Chaplean />
      <Chaplean />

      <LinkCardsList />
    </div>
  );
};

export default HomePage;
