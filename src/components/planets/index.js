import React from "react";
import Planet from "./planet"

class Planets extends React.Component {
  render () {
    return (
      <div>
        <Planet name="Mercúrio"
                description="A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/560px-Mercury_in_color_-_Prockter07-edit1.jpg"
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        />
        <Planet name="Vênus"
                description="Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/560px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
                link="https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
        />
        <Planet name="Terra"
                description="É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos,[14][15][16][17] e a vida surgiu na sua superfície um bilhão de anos depois."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg"
                link="https://pt.wikipedia.org/wiki/Terra"
        />
        <Planet name="Marte"
                description="Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/560px-OSIRIS_Mars_true_color.jpg"
                link="https://pt.wikipedia.org/wiki/Marte_(planeta)"
        />
        <Planet name="Júpiter"
                description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[12] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
                link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
        />
        <Planet name="Saturno"
                description=" Saturno é o segundo maior planeta do Sistema Solar, atrás apenas de Júpiter. Ambos pertencem ao grupo dos gigantes gasosos, de forma que possuem características similares. O planeta é formado predominantemente por hidrogênio e hélio, além de um provável núcleo rochoso."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Saturn%2C_Earth_size_comparison_2.jpg/440px-Saturn%2C_Earth_size_comparison_2.jpg"
                link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
        />
        <Planet name="Urano"
                description="Urano[11] (Úrano em Portugal[12]) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/560px-Uranus2.jpg"
                link="https://pt.wikipedia.org/wiki/Urano_(planeta)"
        />
        <Planet name="Netuno"
                description="Netuno (pt-BR) ou Neptuno (pt) (AO 1990: Netuno ou Neptuno)[2][3] é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/560px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"
                link="https://pt.wikipedia.org/wiki/Netuno_(planeta)"
        />
       </div>
    )
  }
}

export default Planets;