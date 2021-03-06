# **다개국어 학습 서비스 개발**

최초 작성일 :  2020.06.17 KST

작성자 : 권기석 kwonkiseok7@gmail.com


***
## 목차

### A. 프로젝트 설명
### B. 데이터베이스 설계 및 각 테이블 별 주요 유의 사항
### C. 프로젝트 정리 및 보고

***

# **[A] 프로젝트 설명**

## [1] 개요

--------

### 프로젝트 명 

본 프로젝트의 명칭은 <b>다개국어 학습 서비스</b> 이라한다.

### 프로젝트 기간

2020년 6월 19일 ~ 2021년 4월 3일 

시스템 오픈 일정 : 2021년 4월 10일에 배포 

### 프로젝트 목적

번역 기술이 발달함에 따라 스스로 언어를 배울 필요가 없다고 주장하는 사람도 늘고 있으나 궁극적으로 사람과 사람간의 대화에 목적을 두고 있고, 이는 기계가 대신해줄 수 없는 것이다.  

그렇다고 새로운 언어를 배우자니 학습 비용도 크고 시간도 부족하니 바쁜 현대인에게 새로운 언어 학습은 힘들어 보인다. 이에 따라 인공지능 기술과 빅데이터와 같은 신기술들을 적극 활용하여 새로운 언어 학습 서비스를 제작하고자 한다. 

> 누구나 쉽고 부담없이 언제 어디서나 언어를 학습할 수 있도록 한다. 

* 기존의 단순 암기식 학습 방법을 벗어나 자체적으로 새롭게 고안한 <b>맥락기반 학습 방법</b>을 통해 사용자의 보다 <b>효율적인 언어 학습</b>에 도모한다. 
* <b>언어로 인한 진입 장벽</b>을 완화한다.
* 기본 언어 학습 뿐만아니라 관련된 <b>시험</b>도 함께 준비할 수 있도록 한다. 
* 값싸고 저렴하게 공급하여 사용자가 <b>부담없이 효율적인 언어 학습</b>을 할 수 있도록 한다.

### 프로젝트 기대 효과 

정보통신 기술이 더욱 발달함에 따라 국내 뿐만아니라 해외도 필수적으로 신경써야하는 시대에 도래했다. 번역 기술이 아무리 발달한다고 해도 기계의 도움없이는 하나의 언어밖에 구사할 수 없는 사람보다 다개국어를 구사할 수 있는 사람이 더 우대를 받을 것이라고 본다. 

더 많은 사람들과 대화할 수 있는 능력을 갖추게 됨으로서 다양한 문화와 생각들을 자연스럽게 접할 수 있게 된다. 



## [2] 프로젝트 범위

---

아래 내용은 본 서비스에 있어서 **가장 기본적인 요소**로 보다 나은 서비스 제공을 위해 언제든지 추가될 수 있다.

### 2.1 기본적인 단어장 서비스 기능 구축

언어 학습에 있어서 단어 학습은 빠질 수 없는 요소이다. 

```단어 암기, 단어 시험, 단어 복습, 발음 제공``` 과 같은 기본적인 기능을 제공한다.

> 발음은 기계음이 아닌 반드시 원어민의 음성이여야한다.

단, 기본적인 요소이지만 반드시 기존의 서비스와 차별을 두어야 하므로 효율적인 언어 학습 방법을 연구하여 적용할 수 있도록 한다. 

> **단순 암기(Legacy)와 맥락기반 학습이 통일됨** <i>(20.06.25)</i>

***

### 2.2 거의 모든 주 운영체제 뿐만아니라 저사양 디바이스 지원

이 서비스의 궁극적인 목적은 **사회 취약 계층의 사람들도 무료로 효율적으로 학습**할 수 있도록 하는데 있다. 

> 복잡한 그래픽, 애니메이션, 타 라이브러리 사용을 최대한 지양하여 시스템 요구 사양을 낮춘다. 

***

### 2.3 사용자가 직접 만드는 학습 세트와 공유

```퀴즐렛```과 같이 사용자가 직접 학습 세트를 만들 수 있으며 이를 공유도 할 수 있다. 

***

### 2.4 클라우드 소싱

영어의 원어민 음성은 이미 가지고 있으나 일본어, 중국어 같은 타 언어의 음성은 전혀 갖고 있지 않다. 

이부분은 **사용자가 직접 참여**하여 자신의 목소리를 넣을 수 있도록 하고자 한다,

***

### 2.4 오프라인 학습 지원

인터넷이 없으면 무용지물, 



## [3] 시스템 구축 환경

---

소프트웨어로만 구성되어 있으므로 하드웨어는 작성하지 않는다. 

### 3.1 소프트웨어 구성 {}

### 3.2 Front-End (사용자 端)

언제 어디서나 사용이 가능해야하며 특히 **저사양 디바이스**에도 문제없이 동작해야한다는 점이 매우 중요하다.

기본적으로 웹, Android, iOS를 지원하며 **React 웹 프레임워크**를 중심으로 모바일 단에서는 **React Native**, 웹에서는 **React**를 사용한다. 

> 웹 기반이기 때문에 운영체제에 영향을 거의 받지 않는다. 

웹 만으로 사용자 경험을 이끌어내기에 무리가 있는 경우 **Electron 프레임워크(React)**로 데스크톱 애플리케이션을 추후 개발한다. 

프레임워크가 자체적으로 지원하는 플랫폼 목록은 아래와 같다. 

```Linux, Windows, macOS, Android, iOS, Chrome OS```

***

### 3.3 Back-End (서버 端)

서버 프레임워크는 Go언어 기반의 ```Mux``` 를 사용하고, 데이터베이스로는 ```MariaDB, MongoDB``` 를 사용한다. 

### 기본 벡엔드 

```Mux```

#### 데이터 베이스 

* **내부 소셜 서비스**는 MongoDB
* **언어 데이터베이스**는 MariaDB

## [4] 프로젝트 추진

***

### 프로젝트 일정

시작일 : 2020년 6월 20일 기준 



### 기본적인 단어 서비스 구축

>  2020.06.20 ~ 2021.1.8

### 클라우드 소싱 기능 추가

> 2021.1.10 ~ 2021.2.10

### 플랫폼 지원 추가

> 2021.2.12 ~ 2021.2.25



## [5] 위험 요소 및 진행시 주의 사항

---

프로젝트 수행시 발생할 수 있는 기본적인 위험 요소 

### 5.1 개발시 주요 유의사항

### 디자인 패턴과 애플리케이션 아키텍쳐 적용

요구사항 확정 이후에도 변경 요구가 계속될 가능성이 매우 높은 계열이므로 **유지보수**, 또는 **새로운 기능 추가** 등이 쉽도록 신경써서 개발해야한다. 

### 복잡한 UIUX 방지

확실하게 UIUX계획을 수립하지 않은채 무작정 개발을 수행했다가는 사용하기에 매우 복잡한 애플리케이션이 되기 쉽상이다. 기존의 디자인 가이드라인과 사용자 경험 이론을 참조하여 반드시 꼼꼼하게 UIUX 규칙을 만들고 개발을 수행해야한다.



# **[B] 데이터베이스 설계 및 주요 유의사항**

> DATABASE (MariaDB)

서비스에는 언어 데이터베이스 뿐만 아니라 유저같은 다른 분야의 데이터베이스도 필요하지만 우선적으로 단어 데이터베이스만 설계.

***

## **[1] FUNDAMENTAL COMPONENTS**

가장 기본을 이루는 요소인 **단어**와 **문장**

> **새로운 언어**를 지원할 때는 **새로운 테이블**을 추가해서 지원합니다. 이하 방식 동일  ex) 스페인어 지원 => word_es 

## 단어
각 언어별 단어 테이블 생성.

````sql

// 3개 국어 단어 테이블 생성 
CREATE TABLE word_en(
  word_id BIGINT(20) NOT NULL PRIMARY KEY AUTO INCREMENT,
  word VARCHAR(50) NOT NULL,
  word_type TINYINT NOT NULL
)

CREATE TABLE word_ja(
  word_id BIGINT(20) NOT NULL PRIMARY KEY,
  word VARCHAR(50) NOT NULL
)

CREATE TABLE word_ko(
  word_id BIGINT(20) NOT NULL PRIMARY KEY,
  word VARCHAR(50) NOT NULL
)

// 샘플 데이터 주입 
insert into word_en values (1,'hello' ,1);

````

***


## 문장
각 언어별 문장 테이블 생성.

```sql
// 3개국어 테이블 생성 
CREATE TABLE sentences_en(
	sentence_id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	word_id VARCHAR(200) NOT NULL,
	sentence_en VARCHAR(255) NOT NULL,
  	source VARCHAR(30) NULL
)

CREATE TABLE sentences_ja(
  	sentence_id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	word_id VARCHAR(200) NOT NULL,
	sentence_ja VARCHAR(255) NOT NULL,
 	source VARCHAR(30) NULL
)

CREATE TABLE sentences_ko(
 	sentence_id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	word_id VARCHAR(200) NOT NULL,
	sentence_ko VARCHAR(255) NOT NULL,
  	source VARCHAR(30) NULL
)


// 새로운 문장 추가 
insert into sentences_en values (1,'[1]' ,'Hello, this is Maria Diaz','옥스퍼드 영한사전');
INSERT INTO sentences_en (word_id,sentence_en) values('[1]','Hello Simon! What brings you here?');

insert into sentences_ja values (1,'[1]' ,'こんにちは、　私はマリアディアズです。','옥스퍼드 영한사전');
INSERT INTO sentences_ja (sentence_id,word_id,sentence_ja) values(2,'[1]','よおー　サイマン！　ここはなどんなことで？');

insert into sentences_ko values (1,'[1]' ,'여보세요, 저는 마리아 디아즈예요.','옥스퍼드 영한사전');
INSERT INTO sentences_ko (sentence_id,word_id,sentence_ko) values(2,'[1]','어이 사이먼! 여긴 어쩐 일이니?');
```

***

## **기본 동작**

> 모든 **id**는 표기와는 달리 빠른 기능 개발을 위해 일시적으로 **AUTO INCREMENT**를 사용하고 있음. 

기본 동작 목록 

***

#### **1. 단어**

- 새로운 단어 등록

- 이미 등록된 단어의 번역 추가

- <i>단어의 음성 추가</i>

#### **2. 문장**
- 새로운 문장 등록
- 이미 등록된 문장의 다른 언어 추가
- <i>문장의 음성 추가</i>

#### **3. 사용자 학습 세트**

- 사용자 학습 세트 추가
- 사용자 학습 세트 수정
- 사용자 학습 세트 공유 및 권한 설정

#### **4. 단어 학습 시스템(맥락 학습 기반)**
#### **5. 사용자 추가**
#### **6. 손쉬운 사용**

***


## [1] 새로운 단어 등록 및 번역 추가 

넣고자 하는 단어의 의미가 데이터베이스에 완전히 없는 경우 해당 단어의 영어 단어(뜻)와 함께 추가한다. 이후 한국어, 일본어, 중국어 같은 다른 언어의 단어를 추가할 때는 해당 영어 단어를 찾아서 가지고 와야한다.  

처음 단어의 id를 공유 한다. 

그래서 word_id는 모두 공유하므로 한번에 가지고 올 수 있다. 

```sql

// 새로운 단어 추가
// 데이터베이스에 등록되는 최초의 단어일 때만 'word_id'를 명시하여 등록(1)
INSERT INTO word (word_id, word_en, word_type)
VALUES (1518845156,"shadow", 1);

// 방금 넣은 단어의 id를 가져옴
SELECT word_id FROM word where word_id = "shadow";

// 영어 단어의 id로 다른 언어 추가
INSERT INTO word_ko (word_id, word)
VALUES (<word_id>,"그림자");
```

***

## [2] 새로운 문장 넣기 및 번역 추가 

### 1. 이미 있는 단어의 문장(예문)을 추가하는 경우

> 새로운 sentence_id를 부여하여 추가한다.

1. 추가할 예문의 **단어 선택** 
2. 추가하고자 하는 예문이 이미 있는지 확인 
3. 예문 추가 *발음 추가

```sql
// 추가할 단어의 id를 가져옴.
SELECT word_id FROM word where word_id = "shadow";

// 사용자의 언어 선택 (일본어를 선택하였다고 가정)

// 새로운 sentence_id 생성 및 부여
INSERT INTO sentences_ja (sentence_id, word_id, sentence)
VALUES (1518484512,<word_id>,"影も形もない.");
```



### 2. 이미 있는 문장(예문)의 번역을 추가하는 경우

> 번역이므로 대상 예문의 sentence_id를 복사하여 추가한다. 

1. 추가할 예문의 단어 선택
2. **번역할 문장** 선택 및 **언어** 선택
3. 예문 추가 *발음 추가

```sql
//  번역할 문장 선택 및 언어 선택(한국어를 선택했다고 가정)
SELECT sentence_id FROM sentence_ja LIKE '%shadow%';

INSERT INTO sentences_ko (sentence_id, sentence)
VALUES (1518484512,"그림자도 없다.");
```

***

## [3] 새로운 학습 세트를 추가할 때 

학습세트의 기본적인 정보를 입력받은 뒤 학습세트에 들어갈 내용을 추가한다. 

학습할 언어가 2종인 경우


```json
{
    "_id" : "1111",
    "wordbook_name" : "이우신의 시크릿 영어 세트",
    "opened" : "true",
    "making" : "true", // 미완성 구분`
    "lang_info" : [ "ko-KR", "ja-JP" ]
    "description" : "모의고사의 영단어들을 모아보았어요"
    "creator_id" : "1",
    "creator_email" : "kwonkiseok7@gmail.com"
    "created_at" : "2020-04-05 43:12",
    "updated_at" : "2021-11-23 42:11",
    "items" : [
   		{
    		"_id" : "1111", 
    		"question" : "年をとっても働く",
    		"answer" : "나이가 있어도 일한다.",
    		"alt" : "JLPT N3 기출 문제집 32쪽",
    		"description" : "년을 토시라고 읽기도 한다! 꼭 기억할 것."
    		"created_at" : "2020-04-05 43:12",
    		"updated_at" : "2021-11-23 42:11",
    		"highlight" : [
    			{
    				"_id" : "1111", 
    				"target" : "1:3",
    				"alt" : "とし"
				},
				{
    				"_id" : "1111", 
    				"target" : "8:10",
                     "alt" : "はたら"	
				}
    		]
		},
		{
    		"_id" : "222", 
    		"question" : "薬が働く",
    		"answer" : "약이 효능을 발휘한다.",
    		"alt" : "JLPT N3 기출 문제집 35쪽",
    		"description" : "쿠수리 자꾸 까먹는다..",
            "created_at" : "2020-04-05 43:12",
    		"updated_at" : "2021-11-23 42:11",
    		"highlight" : [
    			{
    				"_id" : "1111",
    				"target" : "1:3",
    				"alt" : "くすり"
				},
				{
    				"_id" : "1111", 
    				"target" : "8:10",
                     "alt" : "はたら"	
				}
    		]
		}
    ]
}
```



#### MYSQL DRAFT - DEPRECATED

```sql
CREATE TABLE `wordbooks`
(
    `wordbook_id` BIGINT(10)   NOT NULL,
    `user_id`     bigint(20)   NOT NULL,
    `name`        varchar(50)  NOT NULL,
    `created_at`  datetime     NOT NULL,
    `updated_at`  datetime     NOT NULL,
    `lang`        varchar(5)   NOT NULL,
    `opened`      bit(1)       NOT NULL,
    `description` varchar(255) NULL
);
```



> 퀴즐렛에서는 새로운 학습 세트(단어장)의 추가 버튼을 눈에 띄는 곳에 배치한 것으로 보아 새로운 학습 세트(단어장)의 추가를 굉장히 장려하고 있는 것 같다. 

아직 까지는 **2개의 언어**만 선택 가능 ```일본어 - 한국어, 영어 - 일본어 등 ```

1. **기본적인 양식 입력**후 정보 추가 ```단어장 이름, 분류, 언어``` 등.. => ```INSERT INTO wordbooks```, ```CREATE TABLE <단어장 이름>```
2. 단어 입력, 또는 이미지 선택후 추가 완료
> * 단어장 이름 : '이우신의 시크릿 단어장'
> * 제작자 : '이우신의 고양이'
> * 제작년도 : '2020-01-01 10:10:10'
> * 마지막 수정일: '2020-06-11 10:10:10
> * 언어 : '영어-한국어'
> * 설명 : '테스트 용 단어 입니다.'

```sql
// 단어장 목록 테이블에 추가
INSERT INTO wordbooks (<wordbook_id>,'이우신의 시크릿 단어장', <user_id>,
                       '2020-01-01 10:10:10','2020-06-11 10:10:10','en-ko','테스트용 단어 입니다.');

```



> Table의 이름을 다개국어로 할경우 **폰트 포맷**으로 인해 심각한 오류가 발생할 위험이 있으므로 일정한 규칙으로 짓도록 한다. <i>(자동생성)</i>

아래의 테이블 이름은 그 예시이다. 

> 자동생성 규칙 아직 미정

```sql
// 새로운 단어장 생성 
CREATE TABLE u1234124221koja (
   id INT AUTO_INCREMENT
   word1 VARCHAR(50) NOTNULL,
   word1_spe BIGINT(10) NULL,
   word2 VARCHAR(50) NOTNULL,
   word2_spe BIGINT(10) NULL,
);
```

***

## *  발음 추가하기

### 1. 이미 있는 단어의 발음을 추가하는 경우

1. 발음을 추가할 단어 선택 
2. 언어 선택
3. 녹음 및 추가 

### 2. 이미 있는 문장의 발음을 추가하는 경우

> 대상 단어의 word_id를 복사하여 부여한다.

***

## **[4]  단어 학습 시스템(맥락 학습 기반)**

이미 만들어져있는 학습 세트를 기반으로 학습할 수 있게 한다. 사용자가 직접 만든 세트 뿐만아니라 서비스 차원에서 제공하는 학습 세트를 적극적으로 활용한다.  서비스 차원에서 제공되는 학습세트의 예시는 다음과 같다. 

> 2021학년도 대학수학능력시험 영어 영역 기출 단어, JLPT N2 기출 단어

#### **4.1 단어 암기**

> **회당 최대 단어수**는 사용자의 학습 부담을 줄이기 위해 **50개**로 제한한다.

##### [Block 1]

1. **학습할 단어 표시(명시)** 및 **발음 재생** ```[다음 버튼]```
2. 학습할 단어가 포함된 **예문 표시** 및 ***선택적인 발음 재생** ```다음 버튼```

##### [Block 2]

Block 1의 5회마다 한번씩 간단하게 복습할 수 있도록 객관식 퀴즈 

1. **예문 제시**후 밑줄친 단어의 뜻으로 올바른 것을 **3개의 선택지**중 선택

Block 2 진행중 틀린 단어가 있으면 해당 단어는 한번 더 학습



#### **4.2 단어 시험 **

객관식 퀴즈 형태의 시험은 최대한 지양한다.

**단어 암기의 기준**은 아래와 같다.

1. 뜻을 **정확하게 기억**하고 있는가
2. 해당 단어가 포함된 **문장**을 **정확하게 해석**할 수 있는가
3. **제한 시간** 안에 생각해냈는가

틀리거나 위의 기준을 충족하지 못한 단어의 id를 기록하여 오답노트에 저장한다. 

1. 확인할 단어와 문장을 제시하고 정확하게 해석할 수 있는지 척도를 묻는다.```(다음 화면으로)```

2. 문장의 해석과 단어의 뜻을 보여주고 모두 올바르게 해석했는지 묻는다. 

***

## **[5]  사용자 추가와 관리**

사용자는 ```email```로 가입할 수 있으며 또는 ```Google, Facebook, Apple ID, Github``` 등의 SNS계정으로도 가입할 수 있다. 

* ```last_learned``` 가장 최근에 학습한 학습세트의 id
* ```countrycode``` 회원가입시 받는 사용자의 국가 정보
* ```enabled``` 도용 등과 같은 본 서비스의 오사용으로 인한 피해를 줄이기 위해 손쉽게 계정 활성화 여부를 관리한다.
* ```registermethod``` 가입방법으로 예를 들어 Google 로 가입했다면 ```google```로 들어간다. 
* ```password``` 는 ```bcrypt``` 라이브러리를 사용하여 암호화된 패스워드를 저장한다. 

```sql
CREATE TABLE user` (
	`user_id`	bigint(20)	NOT NULL AUTO_INCREMENT PRIMARY,
	`countrycode`	char(10)	NOT NULL,
	`username`	varchar(15)	NOT NULL,
	`date_created`	datetime	NOT NULL,
	`password`	varchar(255)    NULL,
	`registermethod`	VARCHAR(10)	NOT NULL,
	`email_address`	varchar(255)	NOT NULL,
	`last_learned`	bigint(10)	NULL,
    `refresh_token` TEXT NULL
);
```
> 사용자는 기본적으로 ``SNS계정``으로 가입할 수 있으나 선택적으로 이메일과 패스워드로 로그인할 수 있다. <i>GoogleAuth</i>



기존 데이터베이스에 새로운 컬럼 추가하기

```sql
alter table user add refresh_token TEXT NOT NULL;
```

***

## [6]  손쉬운 사용

본 서비스의 학습을 돕는 방침은 다음과 같다.

> **1. 사용자가 언제든지 자신의 학습 내역을 손쉽게 확인할 수 있어야 한다.**

> **2. 사용자로 하여금 각종 학습들(복습, 취약부분 학습 등)이 용이해야한다.**

다음 테이블은 사용자의 학습 기록을 저장하는 테이블이다.

1. 최근 학습
2. 학습 완료

### 사용자 학습 기록 관련

학습 완료를 포함한 모든 학습기록
```sql
CREATE TABLE `studyhistory` (
	`user_id`	bigint(20)	NOT NULL,
	`wordbook_id`	BIGINT(10)	NOT NULL,
	`last_learned`	datetime	NOT NULL
);
```

시험을 끝내서 완전히 학습이 완료되었다고 판단된 학습 세트
```sql
CREATE TABLE `userfinished` (
	`user_id`	bigint(20)	NOT NULL,
	`wordbook_id`	BIGINT(10)	NOT NULL,
	`last_learned`	datetime	NOT NULL
);
```


***

### 사용자 언어 

```sql
INSERT INTO `country` (`countrycode`, `countryname`, `code`)
VALUES
('KOR','South Korea','KR'),
('USA','United States','US'),
       ('CHN','China','CN'),
       ('JPN','Japan','JP')
```



![](https://i.imgur.com/Ewn759K.png)



>  https://i.imgur.com/Ewn759K.png (자세한 사진은 이곳에서..)

https://www.erdcloud.com/d/cLJytZk5CWf8xqzz2

***

> 로컬 데이터베이스 경로 (macOS 10.15.5)

```t
cd /usr/local/var/mysql
```

# **[C]  프로젝트 정리 및 보고**

실제로 서비스를 개발하여 출시할 의향이 있는 프로젝트로, 실제로 서비스를 출시하기 위해 필요한 가장 기본적인 요소만을 제작해보았다. 

다음으로 프로젝트를 수행하며 겪었던 어려움과 해결방법에 대해 소개하고자 한다. 

### 프로젝트 수행중 어려움 

### [1] 단어, 문장, 사용자 id 부여 방식

서로 다른 요소의 경우 완전히 다른 id를 부여해야만한다. id를 부여하는 방식은 무작위로 char를 주는 방식도 있고, 숫자도 사용할 수 있지만 uuid도 사용할 수 있다. MySQL 8.0 부터 기본적으로 uuid를 생성하는 함수가 포함되어 uuid를 사용할 까 고민했으나, uuid 특성상 길고 복잡한 형태로 인해 퍼포먼스에 문제가 생길 수 있다는 점을 확인하였다. 

이에 대한 대안으로 uuid를 binary(16)으로 변환하여 지정하는 방식도 생각했으나 데이터의 수를 고려하여 그냥 bigint(10) 또는 bigint(20)으로 부여해도 괜찮다고 결론내렸다. 

그러나 bigint가 실무에서 어떻게 사용되는지 알 수 없어서 빠른 개발을 위해 임시로 AUTO INCREMENT를 사용하기로 했다. 

서비스의 기본적인 뼈대가 모두 완성될 때 까지 AUTO INCREMENT를 사용하기로 했다. 



### 느낀점 :

나는 전형적인 완벽주의자 성향을 가지고 있다. 때문에, 나는 이것저것 하나씩 검토해보고 꼼꼼하게 만들고자 하는 강박감 때문에 일을 시작하는데 오래 걸린다. 이번에도 나의 이러한 성향으로 인해 프로젝트 설계 기간이 길어졌다. 

하지만 최근 유튜브에서 좋은 영상을 하나 보았는데 나와 같이 완벽주의자 성향으로 인해 프로젝트 개발이 오래 걸리는 사람들에게 도움이 될만한 영상이였다. 

처음부터 완벽하게 짤 필요가 없다. 처음부터 완벽하게 구성하는 것은  애초에 불가능한 일이다. 일단 마음이 가는대로 짜고 고치면 되는 것이다!