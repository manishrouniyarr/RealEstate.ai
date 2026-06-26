--
-- PostgreSQL database dump
--

\restrict hNcxFWvxrSh4sNEnkY2STIgfRJKwQC7xPiexblM8zAaQPYQV80ldheev2UdtA8U

-- Dumped from database version 15.17 (Homebrew)
-- Dumped by pg_dump version 15.17 (Homebrew)

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
-- Name: properties; Type: TABLE; Schema: public; Owner: manish
--

CREATE TABLE public.properties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    price numeric(15,2) NOT NULL,
    price_type character varying(10) DEFAULT 'buy'::character varying,
    currency character varying(10) DEFAULT 'INR'::character varying,
    property_type character varying(50),
    bedrooms integer,
    bathrooms integer,
    area_sqft integer,
    condition character varying(50),
    location character varying(255),
    city character varying(100),
    state character varying(100),
    country character varying(100) DEFAULT 'India'::character varying,
    latitude numeric(10,7),
    longitude numeric(10,7),
    amenities text[],
    nearby_facilities text[],
    images text[],
    agent_name character varying(100),
    is_featured boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.properties OWNER TO manish;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: manish
--

CREATE SEQUENCE public.properties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_id_seq OWNER TO manish;

--
-- Name: properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: manish
--

ALTER SEQUENCE public.properties_id_seq OWNED BY public.properties.id;


--
-- Name: properties id; Type: DEFAULT; Schema: public; Owner: manish
--

ALTER TABLE ONLY public.properties ALTER COLUMN id SET DEFAULT nextval('public.properties_id_seq'::regclass);


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: manish
--

COPY public.properties (id, title, description, price, price_type, currency, property_type, bedrooms, bathrooms, area_sqft, condition, location, city, state, country, latitude, longitude, amenities, nearby_facilities, images, agent_name, is_featured, created_at, updated_at) FROM stdin;
1	Luxury Villa with Panoramic View	Experience upscale living in this modern villa featuring panoramic skyline views, spacious interiors, and elegant finishes.	45000000.00	buy	INR	Villa	3	4	2500	Excellent	South Delhi, Delhi	New Delhi	Delhi	India	\N	\N	{Parking,Gym,"Swimming Pool",Security}	{Metro,Mall,School}	\N	Alice Adams	t	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
2	Modern Apartment in Prime Location	Sleek and contemporary apartment located in the heart of Mumbai. Includes updated appliances and open-concept layout.	18000000.00	buy	INR	Apartment	2	2	1100	Good	Bandra West, Mumbai	Mumbai	Maharashtra	India	\N	\N	{Parking,Security,Lift}	{Metro,Market,Hospital}	\N	Rahul Sharma	t	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
3	Sea-Facing Duplex Retreat	Charming duplex with sea views, perfect for peaceful living. Features cozy interiors and modern kitchen.	35000000.00	buy	INR	House	3	3	1800	Excellent	Juhu, Mumbai	Mumbai	Maharashtra	India	\N	\N	{Parking,Garden,Security}	{Park,Mall,Airport}	\N	Priya Nair	f	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
4	Private Villa with Garden Views	A stunning villa tucked in a serene neighborhood. Enjoy large green spaces, premium furnishings, and full privacy.	62000000.00	buy	INR	Villa	4	4	3200	Excellent	Whitefield, Bangalore	Bangalore	Karnataka	India	\N	\N	{Parking,Garden,Gym,"Swimming Pool"}	{School,Mall,Hospital}	\N	Neon Alice	t	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
5	Elegant Apartment in IT Hub	Modern apartment near tech parks. Perfect for working professionals with great connectivity.	8500000.00	buy	INR	Apartment	2	2	950	Good	Electronic City, Bangalore	Bangalore	Karnataka	India	\N	\N	{Parking,Gym,"Power Backup"}	{Metro,Market,"Bus Stop"}	\N	Jordan Bram	f	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
6	Farmhouse Estate with Scenic View	Spacious estate surrounded by open farmland and fresh air. Perfect for nature lovers.	25000000.00	buy	INR	House	5	4	5000	Good	Chattarpur, Delhi	New Delhi	Delhi	India	\N	\N	{Parking,Garden,"Club House"}	{Park,Market}	\N	Firari Alice	f	2026-04-09 01:21:38.10719	2026-04-09 01:21:38.10719
\.


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: manish
--

SELECT pg_catalog.setval('public.properties_id_seq', 6, true);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: manish
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict hNcxFWvxrSh4sNEnkY2STIgfRJKwQC7xPiexblM8zAaQPYQV80ldheev2UdtA8U

