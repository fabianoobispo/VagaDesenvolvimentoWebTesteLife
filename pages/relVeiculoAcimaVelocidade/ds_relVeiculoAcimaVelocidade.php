<?php

$where = '';

if(!empty($_REQUEST['placa'])) {
    $where = "WHERE v.placa LIKE '%{$_REQUEST['placa']}%' AND  rs.velocidade > v.vel_maxima ";
}

$db = new Database();

if($db->connect()) {

    $dados = $db->sqlQueryArray(
        "SELECT
            rs.velocidade as velocidadeRegistrada,
            v.vel_maxima as velocidadeMaxima,            
            v.placa as placa,
            f.nome as nomefuncionario,
            rs.*
        FROM rastreamento rs
        INNER JOIN veiculo v ON v.id = rs.veiculo_id
        INNER JOIN funcionario f ON f.id = rs.funcionario_id
        {$where}"
    );

    echo json_encode(array(
        'status' => 'success',
        'data' => $dados
    ));

} else {
    echo json_encode(array(
        'status' => 'failure',
        'message' => 'Erro ao conectar ao banco'
    ));
}