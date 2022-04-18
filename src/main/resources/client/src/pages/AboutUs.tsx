import React, {FunctionComponent} from "react";
import corporateImage from "../assets/corporate.jpg";

export const AboutUsPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col space-y-8 mb-10">
      <div className="aspect-w-16 aspect-h-9">
        <img src={corporateImage} alt="corporate-image"/>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col basis-2/5 space-y-6 justify-start text-right">
          <div className="justify-end">Firma</div>
          <div className="justify-end">h2n Mimarlık Mühendislik Ltd.Şti.</div>
        </div>
        <div className="flex flex-col basis-3/5">
          <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
            undoubtable source.
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col basis-2/5">
        </div>
        <div className="flex flex-col basis-3/5 space-y-2">
          <div>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from
            a line in section 1.10.32.
          </div>
          <div>
            Very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from
            a line in section 1.10.32.
          </div>
          <div>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </div>
        </div>
      </div>


      <div className="flex flex-row space-x-10">
        <div className="flex flex-col basis-2/5 justify-start text-right">
          <div>Atilla Hatipoğlu</div>
          <div>Mimar</div>
          <div>Viyana Teknik Üniversitesi, BSc</div>
        </div>
        <div className="basis-3/5">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
          from
          a line in section 1.10.32.
        </div>
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col basis-2/5 justify-start text-right">
          <div>Fikri Numanoğlu</div>
          <div>Mimar</div>
          <div>Viyana Teknik Üniversitesi, BSc</div>
        </div>
        <div className="basis-3/5">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>
      </div>

    </div>

  );
}


