import React from 'react'
import ReactDOM from 'react-dom'
// Importação deve conter letra maiúscula. Padrão
import FirstComp from './components/FirstComp'
import SecondComp from './components/SecondComp'
import ThirdComp from './components/ThirdComp'
import FourthComp from './components/FourthComp'
// para importar múltiplos componentes, deve-se utilizar a desestruturação com {}
import MultiNight, { GoodMorning, GoodAfternoon } from './components/MultiplesComp'
// importando classe
import Salutation from './components/ComponentsClasses'

import Father from './components/FatherComp'
import Sons from './components/SonComp'

const MyPage =
    <div>
        <h1>Hi, this is my first app!</h1>
        <button>OK!</button>
        <h2>
            <FirstComp />
        </h2>
        <SecondComp />

        <ThirdComp name="My App" />

        <FourthComp />

        <GoodMorning name="Ana" />
        <GoodAfternoon name="Bia" />
        {/* O nome da importação não importa*/}
        <MultiNight name="Marcos" />

        <Salutation type="Good Morning" name="John" />

        <Father FirstName="Julio" LastName="Souza">


        <Sons FirstName="Julia" />
        <Sons FirstName="Kleyton" />
        <Sons FirstName="Carla" LastName="Silva"/>
        
        </Father>

    </div>
ReactDOM.render(MyPage, document.getElementById('root'))
