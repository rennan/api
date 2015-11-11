-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema heroku_906decab4935e66
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema heroku_906decab4935e66
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heroku_906decab4935e66` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `heroku_906decab4935e66` ;

-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`cidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`cidades` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`cidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`empresas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`empresas` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`empresas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cidade` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `data_criacao` VARCHAR(20) NULL,
  `data_atualizacao` VARCHAR(20) NULL,
  PRIMARY KEY (`id`, `id_cidade`),
  INDEX `fk_empresas_cidades1_idx` (`id_cidade` ASC),
  CONSTRAINT `fk_empresas_cidades1`
    FOREIGN KEY (`id_cidade`)
    REFERENCES `heroku_906decab4935e66`.`cidades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`circulares`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`circulares` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`circulares` (
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
    REFERENCES `heroku_906decab4935e66`.`empresas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`vias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`vias` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`vias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_onibus` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`, `id_onibus`),
  INDEX `fk_vias_circulares1_idx` (`id_onibus` ASC),
  CONSTRAINT `fk_vias_circulares1`
    FOREIGN KEY (`id_onibus`)
    REFERENCES `heroku_906decab4935e66`.`circulares` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`horarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`horarios` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`horarios` (
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
    REFERENCES `heroku_906decab4935e66`.`vias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `heroku_906decab4935e66`.`itinerarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `heroku_906decab4935e66`.`itinerarios` ;

CREATE TABLE IF NOT EXISTS `heroku_906decab4935e66`.`itinerarios` (
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
    REFERENCES `heroku_906decab4935e66`.`vias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
