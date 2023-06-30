--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name text,
    address text
);


--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    client_id integer NOT NULL,
    product text NOT NULL,
    status text DEFAULT 'Pedido recebido'::text NOT NULL
);


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.clients VALUES (1, 'Larissa', 'Rua 1, Num 1, Cidade 1');
INSERT INTO public.clients VALUES (2, 'Lucas', 'Rua 2, Num 2, Cidade 2');
INSERT INTO public.clients VALUES (3, 'Pedro', 'Rua 3, Num 3, Cidade 3');
INSERT INTO public.clients VALUES (4, 'Mariana', 'Rua 4, Num 4, Cidade 4');
INSERT INTO public.clients VALUES (5, 'Juliana', 'Rua 5, Num 5, Cidade 5');
INSERT INTO public.clients VALUES (6, 'Gustavo', 'Rua 6, Num 6, Cidade 6');
INSERT INTO public.clients VALUES (7, 'Isabela', 'Rua 7, Num 7, Cidade 7');
INSERT INTO public.clients VALUES (8, 'Rafael', 'Rua 8, Num 8, Cidade 8');
INSERT INTO public.clients VALUES (9, 'Camila', 'Rua 9, Num 9, Cidade 9');
INSERT INTO public.clients VALUES (10, 'Felipe', 'Rua 10, Num 10, Cidade 10');
INSERT INTO public.clients VALUES (11, 'Luisa', 'Rua 11, Num 11, Cidade 11');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (6, 4, 'Hambúrguer', 'Preparando pedido');
INSERT INTO public.orders VALUES (7, 2, 'Batata frita', 'Pedido enviado');
INSERT INTO public.orders VALUES (8, 5, 'Sushi', 'Pedido recebido');
INSERT INTO public.orders VALUES (9, 3, 'Salada', 'Preparando pedido');
INSERT INTO public.orders VALUES (10, 6, 'Refrigerante', 'Pedido enviado');
INSERT INTO public.orders VALUES (11, 4, 'Hot dog', 'Pedido recebido');
INSERT INTO public.orders VALUES (12, 5, 'Camarão grelhado', 'Preparando pedido');
INSERT INTO public.orders VALUES (13, 6, 'Suco natural', 'Pedido enviado');
INSERT INTO public.orders VALUES (14, 7, 'Frango assado', 'Pedido recebido');
INSERT INTO public.orders VALUES (18, 1, 'Tropeiro com linguiça', 'Pedido recebido');
INSERT INTO public.orders VALUES (19, 1, 'Tropeiro com linguiça', 'Pedido recebido');
INSERT INTO public.orders VALUES (20, 1, 'Tropeiro com linguiça', 'Pedido recebido');
INSERT INTO public.orders VALUES (21, 2, 'Ovo com linguiça', 'Pedido recebido');
INSERT INTO public.orders VALUES (1, 1, 'Lasanha', 'Pedido enviado');
INSERT INTO public.orders VALUES (4, 1, 'Coca cola', 'Pedido enviado');
INSERT INTO public.orders VALUES (3, 2, 'Peixe empanado', 'Preparando pedido');
INSERT INTO public.orders VALUES (23, 2, 'Refrigerante', 'Pedido recebido');


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clients_id_seq', 11, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orders_id_seq', 23, true);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: orders fk_client_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_client_id FOREIGN KEY (client_id) REFERENCES public.clients(id);


--
-- PostgreSQL database dump complete
--

