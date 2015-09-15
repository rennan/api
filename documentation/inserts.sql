-- -----------------------------------------------------
-- INSERTS para Cidades
-- -----------------------------------------------------

INSERT INTO cidades (nome, estado) 
    VALUES 
    ('Londrina', 'PR'), 
    ('Curitiba', 'PR'), 
    ('Maringá', 'PR'), 
    ('Ponta Grossa', 'PR'), 
    ('Cascavel', 'PR'), 
    ('Foz do Iguaçu', 'PR');

-- -----------------------------------------------------
-- INSERTS para Empresas
-- -----------------------------------------------------

INSERT INTO empresas (id_cidade, nome, data_criacao, data_atualizacao)
    VALUES
    ('1', 'TCGL', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('1', 'Londrisul', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('2', 'URBS', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('3', 'TCCC', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('4', 'VCG', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('5', 'CETTRANS', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')), 
    ('6', 'FOZTRANS', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'));

-- -----------------------------------------------------
-- INSERTS para os Ônibus
-- -----------------------------------------------------

INSERT INTO circulares (id_empresa, linha, nome, data_criacao, data_atualizacao)
    VALUES
    ('1','113', 'Pioneiros', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')),
    ('1','112', 'Alexandre Urbanas', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')),
    ('1','114', 'Boulevard Shopping', DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'), DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s'));

-- -----------------------------------------------------
-- INSERTS para as VIAS
-- -----------------------------------------------------

INSERT INTO vias (id_onibus, nome) 
    VALUES 
    ('1', 'Linha Convencional'),
    ('1', 'Parque Tauá'),
    ('1', 'Expresso UTFPR - Boulevard');

-- -----------------------------------------------------
-- INSERTS para os Horários
-- -----------------------------------------------------

INSERT INTO horarios (id_via, ponto_inicial, dias_uteis, sabado, domingo, feriado, hora)
    VALUES 
    ('1', 'Terminal Central', true, false, false, false, '06:05'),
    ('1', 'Terminal Central', true, false, false, false, '06:45'),
    ('2', 'Terminal Central', true, false, false, false, '07:05'),
    ('2', 'Terminal Central', true, false, false, false, '07:25'),
    ('1', 'Terminal Central', true, false, false, false, '07:45'),
    ('2', 'Terminal Central', true, false, false, false, '08:05'),
    ('1', 'Terminal Central', true, false, false, false, '08:26'),
    ('1', 'Terminal Central', true, false, false, false, '08:47'),
    ('1', 'Terminal Central', true, false, false, false, '09:08'),
    ('1', 'Terminal Central', true, false, false, false, '09:29'),
    ('1', 'Terminal Central', true, false, false, false, '09:50'),
    ('1', 'Terminal Central', true, false, false, false, '10:11'),
    ('1', 'Terminal Central', true, false, false, false, '10:32'),
    ('1', 'Terminal Central', true, false, false, false, '10:53'),
    ('1', 'Terminal Central', true, false, false, false, '11:14'),
    ('1', 'Terminal Central', true, false, false, false, '11:40'),
    ('1', 'Terminal Central', true, false, false, false, '12:03'),
    ('1', 'Terminal Central', true, false, false, false, '12:27'),
    ('1', 'Terminal Central', true, false, false, false, '12:50'),
    ('1', 'Terminal Central', true, false, false, false, '13:14'),
    ('1', 'Terminal Central', true, false, false, false, '13:37'),
    ('1', 'Terminal Central', true, false, false, false, '14:01'),
    ('1', 'Terminal Central', true, false, false, false, '14:24'),
    ('1', 'Terminal Central', true, false, false, false, '14:48'),
    ('1', 'Terminal Central', true, false, false, false, '15:11'),
    ('1', 'Terminal Central', true, false, false, false, '15:35'),
    ('1', 'Terminal Central', true, false, false, false, '16:00'),
    ('1', 'Terminal Central', true, false, false, false, '16:25'),
    ('2', 'Terminal Central', true, false, false, false, '16:50'),
    ('1', 'Terminal Central', true, false, false, false, '17:15'),
    ('2', 'Terminal Central', true, false, false, false, '17:40'),
    ('2', 'Terminal Central', true, false, false, false, '18:05'),
    ('1', 'Terminal Central', true, false, false, false, '18:30'),
    ('1', 'Terminal Central', true, false, false, false, '18:55'),
    ('1', 'Terminal Central', true, false, false, false, '19:45'),
    ('1', 'Terminal Central', true, false, false, false, '20:32'),
    ('1', 'Terminal Central', true, false, false, false, '21:23'),
    ('1', 'Terminal Central', true, false, false, false, '21:43'),
    ('1', 'Terminal Central', true, false, false, false, '22:04'),
    ('1', 'Terminal Central', true, false, false, false, '22:22'),
    ('1', 'Terminal Central', true, false, false, false, '22:45'),
    ('1', 'Terminal Central', true, false, false, false, '23:20'),
    ('3', 'Terminal Central', true, false, false, false, '18:20'),
    ('3', 'Terminal Central', true, false, false, false, '22:42'),

    ('1', 'UTFPR', true, false, false, false, '06:25'),
    ('1', 'UTFPR', true, false, false, false, '07:01'),
    ('2', 'UTFPR', true, false, false, false, '07:21'),
    ('2', 'UTFPR', true, false, false, false, '07:41'),
    ('1', 'UTFPR', true, false, false, false, '08:01'),
    ('2', 'UTFPR', true, false, false, false, '08:21'),
    ('1', 'UTFPR', true, false, false, false, '08:42'),
    ('1', 'UTFPR', true, false, false, false, '09:03'),
    ('1', 'UTFPR', true, false, false, false, '09:24'),
    ('1', 'UTFPR', true, false, false, false, '09:45'),
    ('1', 'UTFPR', true, false, false, false, '10:06'),
    ('1', 'UTFPR', true, false, false, false, '10:27'),
    ('1', 'UTFPR', true, false, false, false, '10:48'),
    ('1', 'UTFPR', true, false, false, false, '11:11'),
    ('1', 'UTFPR', true, false, false, false, '11:34'),
    ('1', 'UTFPR', true, false, false, false, '11:58'),
    ('1', 'UTFPR', true, false, false, false, '12:21'),
    ('1', 'UTFPR', true, false, false, false, '12:45'),
    ('1', 'UTFPR', true, false, false, false, '13:08'),
    ('1', 'UTFPR', true, false, false, false, '13:32'),
    ('1', 'UTFPR', true, false, false, false, '13:55'),
    ('1', 'UTFPR', true, false, false, false, '14:19'),
    ('1', 'UTFPR', true, false, false, false, '14:42'),
    ('1', 'UTFPR', true, false, false, false, '15:06'),
    ('1', 'UTFPR', true, false, false, false, '15:29'),
    ('1', 'UTFPR', true, false, false, false, '15:53'),
    ('1', 'UTFPR', true, false, false, false, '16:20'),
    ('1', 'UTFPR', true, false, false, false, '16:45'),
    ('2', 'UTFPR', true, false, false, false, '17:10'),
    ('1', 'UTFPR', true, false, false, false, '17:35'),
    ('2', 'UTFPR', true, false, false, false, '18:00'),
    ('2', 'UTFPR', true, false, false, false, '18:25'),
    ('1', 'UTFPR', true, false, false, false, '18:50'),
    ('1', 'UTFPR', true, false, false, false, '19:15'),
    ('1', 'UTFPR', true, false, false, false, '20:03'),
    ('1', 'UTFPR', true, false, false, false, '20:50'),
    ('1', 'UTFPR', true, false, false, false, '21:39'),
    ('1', 'UTFPR', true, false, false, false, '21:59'),
    ('1', 'UTFPR', true, false, false, false, '22:20'),
    ('1', 'UTFPR', true, false, false, false, '23:05'),
    ('1', 'UTFPR', true, false, false, false, '23:35'),
    ('2', 'UTFPR', true, false, false, false, '17:00'),
    ('2', 'UTFPR', true, false, false, false, '18:35'),
    ('2', 'UTFPR', true, false, false, false, '21:20'),
    ('2', 'UTFPR', true, false, false, false, '22:55'),

    ('2', 'Terminal Central', false, true, false, false, '06:55'),
    ('1', 'Terminal Central', false, true, false, false, '07:40'),
    ('1', 'Terminal Central', false, true, false, false, '08:25'),
    ('1', 'Terminal Central', false, true, false, false, '12:20'),
    ('1', 'Terminal Central', false, true, false, false, '12:56'),
    ('1', 'Terminal Central', false, true, false, false, '13:32'),
    ('2', 'Terminal Central', false, true, false, false, '16:40'),

    ('2', 'UTFPR', false, true, false, false, '07:20'),
    ('1', 'UTFPR', false, true, false, false, '12:00'),
    ('1', 'UTFPR', false, true, false, false, '12:36'),
    ('1', 'UTFPR', false, true, false, false, '13:12'),
    ('1', 'UTFPR', false, true, false, false, '17:05'),
    ('2', 'UTFPR', false, true, false, false, '18:05'),

    ('2', 'Terminal Central', false, false, true, false, '07:40'),
    ('2', 'Terminal Central', false, false, true, false, '08:25'),
    ('2', 'Terminal Central', false, false, true, false, '16:40'),

    ('1', 'UTFPR', false, false, true, false, '17:05'),
    ('2', 'UTFPR', false, false, true, false, '18:05');

-- -----------------------------------------------------
-- INSERTS para os Itinerários
-- -----------------------------------------------------

INSERT INTO itinerarios (id_via, nome, ordem)
    VALUES ('1', 'Terminal Central', '1', '-23.3087456', '-51.160759'),
    ('1', 'Rua Benjamin Constant', '2'),
    ('1', 'Av. Leste-Oeste', '3'),
    ('1', 'Av. Theodoro Victorelli', '4'),
    ('1', 'Rua Santa Terezinha', '5'),
    ('1', 'Av. Celso Garcia Cid', '6'),
    ('1', 'Estrada dos Pioneirs', '7'),
    ('1', 'Av. Jamil Scaf', '8'),
    ('1', 'Av. Mituo Morita', '9'),
    ('1', 'Av. Antônio Euclides Sapia', '10'),
    ('1', 'Rua Issami Idehira', '11'),
    ('1', 'Rua Alexandre Rocha Filho', '12'),
    ('1', 'Estrada dos Pioneiros', '13'),
    ('1', 'UTFPR', '14'),
    ('1', 'Estrada dos Pioneiros', '15'),
    ('1', 'Rua Carmela Dutra', '16'),
    ('1', 'Rua do Limão', '17'),
    ('1', 'Rua de acesso ao SEST/SENAT', '18'),
    ('1', 'Rua Santa Terezinha', '19'),
    ('1', 'Av. Theodoro Victorelli', '20'),
    ('1', 'Av. Leste-Oeste', '21'),
    ('1', 'Rua Sergipe', '22'),
    ('1', 'Rua Professor João Cândido', '23'),
    ('1', 'Terminal Central', '1', '-23.3087456', '-51.160759');