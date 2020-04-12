# Configuration

- [Global Configuration](#global-configuration)
- [Database](#database-configuration)
- [Mailer](#mailer-configuration)
- [Routes](#routes-configuration)

## Global Configuration {#global-configuration}

|Key|Type|Default|Description|
|--|--|--|--|
|`title`|`string`|""|The title of the website.|
|`theme`|`string`|""|The name of the theme directory in `src/Themes/`.|
|`session`|`bool`|true|Start PHP Session if TRUE.|

## Database Configuration {#database-configuration}

|Key|Type|Default|Description|
|--|--|--|--|
|`statement`|`string`|""|The name of the statement.|
|`driver`|`string`|"mysql"|Database driver.|
|`host`|`string`|""|Database Host.|
|`port`|`integer`|3306|Database Host port.|
|`schema`|`string`|""|Database name.|
|`user`|`string`|""|Database user name.|
|`pass`|`string`|""|Database user password.|
|`charset`|`string`|"utf8"|Database charset.|
|`prefix`|`string`|""|Tables prefix.|
|`fetch-mode`|`string`|Query::FETCH_OBJ|Default result mode.|

## Mailer Configuration {#mailer-configuration}

|Key|Type|Default|Description|
|--|--|--|--|
|`transport`|`string`|"smtp"|.|
|`auth`|`bool`|true|.|
|`tls`|`bool`|true|.|
|`host`|`string`|""|.|
|`username`|`string`|""|.|
|`password`|`string`|""|.|
|`port`|`integer`|587|.|
|`from_address`|`string`|""|Defaut sender email.|
|`from_name`|`string`|""|Default sender name.|
|`noreply`|`string`|""|Default no-reply address.|

## Routes Configuration {#routes-configuration}

|Key|Type|Default|Description|
|--|--|--|--|
