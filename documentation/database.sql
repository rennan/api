-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db_api_transporte_coletivo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_api_transporte_coletivo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_api_transporte_coletivo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `db_api_transporte_coletivo` ;

-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`cidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`cidades` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`cidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`empresas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`empresas` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`empresas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cidade` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `data_criacao` VARCHAR(20) NULL,
  `data_atualizacao` VARCHAR(20) NULL,
  PRIMARY KEY (`id`, `id_cidade`),
  INDEX `fk_empresas_cidades1_idx` (`id_cidade` ASC),
  CONSTRAINT `fk_empresas_cidades1`
    FOREIGN KEY (`id_cidade`)
    REFERENCES `db_api_transporte_coletivo`.`cidades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`circulares`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`circulares` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`circulares` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_empresa` INT NOT NULL,
  `linha` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NOT NULL,
  `data_criacao` VARCHAR(20) NULL,
  `data_atualizacao` VARCHAR(20) NULL,
  PRIMARY KEY (`id`, `id_empresa`),
  INDEX `fk_circulares_empresas1_idx` (`id_empresa` ASC),
  CONSTRAINT `fk_circulares_empresas1`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `db_api_transporte_coletivo`.`empresas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`vias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`vias` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`vias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_onibus` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`, `id_onibus`),
  INDEX `fk_vias_circulares1_idx` (`id_onibus` ASC),
  CONSTRAINT `fk_vias_circulares1`
    FOREIGN KEY (`id_onibus`)
    REFERENCES `db_api_transporte_coletivo`.`circulares` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`horarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`horarios` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`horarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_via` INT NOT NULL,
  `ponto_inicial` VARCHAR(90) NOT NULL,
  `dias_uteis` TINYINT(1) NULL,
  `sabado` TINYINT(1) NULL,
  `domingo` TINYINT(1) NULL,
  `feriado` TINYINT(1) NULL,
  `hora` VARCHAR(5) NULL,
  PRIMARY KEY (`id`, `id_via`),
  INDEX `fk_horarios_vias1_idx` (`id_via` ASC),
  CONSTRAINT `fk_horarios_vias1`
    FOREIGN KEY (`id_via`)
    REFERENCES `db_api_transporte_coletivo`.`vias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_api_transporte_coletivo`.`itinerarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_api_transporte_coletivo`.`itinerarios` ;

CREATE TABLE IF NOT EXISTS `db_api_transporte_coletivo`.`itinerarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_via` INT NOT NULL,
  `ordem` INT NOT NULL,
  `nome` VARCHAR(150) NULL,
  `latitude` VARCHAR(10) NULL,
  `longitude` VARCHAR(10) NULL,
  PRIMARY KEY (`id`, `id_via`),
  INDEX `fk_itinerarios_vias1_idx` (`id_via` ASC),
  CONSTRAINT `fk_itinerarios_vias1`
    FOREIGN KEY (`id_via`)
    REFERENCES `db_api_transporte_coletivo`.`vias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
