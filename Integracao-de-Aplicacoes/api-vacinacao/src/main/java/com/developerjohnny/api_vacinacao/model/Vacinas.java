package com.developerjohnny.api_vacinacao.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Vacinas {
    private String name;
    private String endereco;
    private String latitude;
    private String longitude;

}


//id int not null auto_increment primary key,
//name varchar(200) not null,
//description text,
//tipo varchar(100)

