# VagaDesenvolvimentoWebTesteLife

Database.php foi alterado para:

    $this->ip = 'localhost';
    $this->user = 'root';
    $this->password = '';
    $this->database = 'avaliacao';

 

foi adicionado as seguiintes tabelas 

    CREATE TABLE funcao (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255))

	CREATE TABLE funcionario (
    id int NOT NULL,
    nome varchar(255),
    data_cadastro DATE,
    funcao_id int,
    PRIMARY KEY (id),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (funcao_id)
    REFERENCES funcao(id))

	CREATE TABLE rastreamento (
    id int NOT NULL,
    nome varchar(255),
    data DATE,
    funcionario_id  int,
    veiculo_id int,
    latitude real,
    longitude real,
    velocidade real,
    
    PRIMARY KEY (id),
    CONSTRAINT FK_funcionario FOREIGN KEY (funcionario_id)
    REFERENCES funcionario(id),
 	CONSTRAINT FK_veiculo FOREIGN KEY (veiculo_id)
    REFERENCES veiculo(id))

	CREATE TABLE veiculo (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255),
    data_cadastro DATE,
    placa varchar(7),
    vel_maxima REAL)

