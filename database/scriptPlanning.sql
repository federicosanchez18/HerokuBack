 SCRIPT PARA CREACION DE TABLAS DE LA BASE DE DATOS

CREATE TABLE USUARIOS (
  Usuario_Key INTEGER IDENTITY (1, 1) ,
  Usuario_Codigo VARCHAR(100), 
  Usuario_Rol INTEGER,
  Usuario_Nombre_Completo VARCHAR(100), 
  Usuario_Apellido VARCHAR(50), 
  Usuario_Nombre VARCHAR(50), 
  Usuario_Mail VARCHAR(100), 
  Usuario_TokenID VARCHAR(100), 
  Usuario_Tipo VARCHAR(20), 
  Usuario_Habilitado VARCHAR(5), 
  Usuario_Mail_Alternativo VARCHAR(100)
  )

CREATE TABLE [PERMISOS] (
  [Permiso_Key] INTEGER IDENTITY (1, 1) , 
 PRIMARY KEY ([Permiso_Key])
) ON [PRIMARY]
GO

CREATE TABLE [ROLES] (
  [Rol_Key] INTEGER IDENTITY (1, 1) , 
 PRIMARY KEY ([Rol_Key])
) ON [PRIMARY]
GO

CREATE TABLE [MONEDAS] (
  [Moneda_Key] INTEGER IDENTITY (1, 1) ,
  [Moneda_Codigo] VARCHAR(10) ,
  [Moneda_Descripcion] VARCHAR(50) ,
  [Moneda_Simbolo] VARCHAR(5) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Moneda_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TIPOS_COLABORADORES] (
  [Tipo_Colaborador_Key] INTEGER IDENTITY (1, 1) ,
  [Tipo_Colaborador_Codigo] VARCHAR(10) ,
  [Tipo_Colaborador_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2)
 PRIMARY KEY ([Tipo_Colaborador_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES_PUESTOS] (
  [Colaborador_Puesto_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Puesto_Codigo] VARCHAR(10) ,
  [Colaborador_Puesto_Descripcion] VARCHAR(50) ,
  [Colaborador_Puesto_Padre] INTEGER ,
  [Colaborador_Puesto_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2)
 PRIMARY KEY ([Colaborador_Puesto_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES] (
  [Colaborador_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Usuario] INTEGER NOT NULL ,
  [Colaborador_Region] INTEGER ,
  [Colaborador_Area] INTEGER ,
  [Colaborador_Puesto] INTEGER ,
  [Colaborador_Tipo] INTEGER ,
  [Colaborador_Empresa] INTEGER ,
  [Colaborador_Estado] INTEGER ,
  [Colaborador_Codigo] VARCHAR(10) ,
  [Colaborador_Descripcion] VARCHAR(50) ,
  [Colaborador_Responsable_Principal] INTEGER ,
  [Colaborador_Responsable_Secundario] INTEGER ,
  [Colaborador_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Colaborador_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES_HORAS] (
  [Colaborador_Hora_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Hora_Usuario] INTEGER ,
  [Colaborador_Hora_Dia] INTEGER ,
  [Colaborador_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Colaborador_Hora_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES_HOME_OFFICE] (
  [Colaborador_Home_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Home_Usuario] INTEGER ,
  [Colaborador_Home_Cantidad] [int] NULL,
  [Colaborador_Home_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Colaborador_Home_Key])
) ON [PRIMARY]
GO

CREATE TABLE [IDIOMAS] (
  [Idioma_Key] INTEGER IDENTITY (1, 1) ,
  [Idioma_Codigo] VARCHAR(10) ,
  [Idioma_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Idioma_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COTIZACIONES] (
  [Cotizacion_Key] INTEGER IDENTITY (1, 1) ,
  [Cotizacion_Fecha] INTEGER ,
  [Cotizacion_Moneda_Origen] INTEGER ,
  [Cotizacion_Moneda_Destino] INTEGER ,
  [Cotizacion_Factor_Conversion] FLOAT ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Cotizacion_Key])
) ON [PRIMARY]
GO


CREATE TABLE [UNIDADES_NEGOCIOS] (
  [Unidad_Negocio_Key] INTEGER IDENTITY (1, 1) ,
  [Unidad_Negocio_Codigo] VARCHAR(10) ,
  [Unidad_Negocio_Descripcion] VARCHAR(50) ,
  [Unidad_Negocio_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Unidad_Negocio_Key])
) ON [PRIMARY]
GO

CREATE TABLE [CLIENTES] (
  [Cliente_Key] INTEGER IDENTITY (1, 1) ,
  [Cliente_Codigo] VARCHAR(30) ,
  [Cliente_Descripcion] VARCHAR(100) ,
  [Cliente_Region] INTEGER ,
  [Cliente_Industria] INTEGER ,
  [Cliente_Empresa] INTEGER,
  [Cliente_Moneda_Principal] INTEGER,
  [Cliente_Logo] VARCHAR(1000),
  [Cliente_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Cliente_Key])
) ON [PRIMARY]
GO

CREATE TABLE [PROYECTOS_ALCANCES] (
  [Proyecto_Alcance_Key] INTEGER IDENTITY (1, 1) ,
  [Proyecto_Alcance_Codigo] VARCHAR(10) ,
  [Proyecto_Alcance_Descripcion] VARCHAR(50),
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Proyecto_Alcance_Key])
) ON [PRIMARY]
GO

CREATE TABLE [PROYECTOS] (
  [Proyecto_Key] INTEGER IDENTITY (1, 1) ,
  [Proyecto_Unidad_Negocio] INTEGER ,
  [Proyecto_Facturable] INTEGER ,
  [Proyecto_Alcance] INTEGER ,
  [Proyecto_Codigo] VARCHAR(50) ,
  [Proyecto_Descripcion] VARCHAR(100) ,
  [Proyecto_Tipo] INTEGER ,
  [Proyecto_Cliente] INTEGER ,
  [Proyecto_Moneda] INTEGER ,
  [Proyecto_Responsable] INTEGER ,
  [Proyecto_Vendedor] INTEGER ,
  [Proyecto_Referente_Comercial] VARCHAR(100) ,
  [Proyecto_Referente_Comercial_Mail] VARCHAR(100) ,
  [Proyecto_Referente_Tecnico] VARCHAR(100) ,
  [Proyecto_Referente_Tecnico_Mail] VARCHAR(100) ,
  [Proyecto_Codigo_Externo] VARCHAR(100) ,
  [Proyecto_Newsletter] VARCHAR(10),
  [Proyecto_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Proyecto_Key])
) ON [PRIMARY]
GO

CREATE TABLE [HORAS_TIPOS] (
  [Hora_Tipo_Key] INTEGER IDENTITY (1, 1) ,
  [Hora_Tipo_Codigo] VARCHAR(10) ,
  [Hora_Tipo_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Hora_Tipo_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TIPOS_TECNOLOGIAS] (
  [Tipo_Tecnologia_Key] INTEGER IDENTITY (1, 1) ,
  [Tipo_Tecnologia_Codigo] VARCHAR(10) ,
  [Tipo_Tecnologia_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2)
 PRIMARY KEY ([Tipo_Tecnologia_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TECNOLOGIAS] (
  [Tecnologia_Key] INTEGER IDENTITY (1, 1) ,
  [Tecnologia_Codigo] VARCHAR(10) ,
  [Tecnologia_Descripcion] VARCHAR(50) ,
  [Tecnologia_Tipo] INTEGER ,
  [Tecnologia_Proveedor] VARCHAR(50) ,
  [Tecnologia_Referente] VARCHAR(100) ,
  [Tecnologia_Caso_Exito] VARCHAR(1000) ,
  [Tecnologia_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Tecnologia_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TAREAS] (
  [Tarea_Key] INTEGER IDENTITY (1, 1) ,
  [Tarea_Proyecto] INTEGER ,
  [Tarea_Codigo] VARCHAR(50) ,
  [Tarea_Descripcion] VARCHAR(100) ,
  [Tarea_Hora] INTEGER ,
  [Tarea_Prioridad] VARCHAR(10) ,
  [Tarea_Fecha_Pedido] INTEGER ,
  [Tarea_Tipo_Fecha_Resolucion] VARCHAR(10) ,
  [Tarea_Fecha_Resolucion] INTEGER ,
  [Tarea_Pedido_Por] VARCHAR(100) ,
  [Tarea_Observacion] VARCHAR(1000) ,
  [Tarea_Adjunto] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Tarea_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TIEMPOS] (
  [Tiempo_Key] INTEGER NOT NULL ,
  [Tiempo_Fecha] DATE ,
  [Tiempo_Anio] INTEGER ,
  [Tiempo_Trimestre] INTEGER ,
  [Tiempo_Mes_Numero] INTEGER ,
  [Tiempo_Mes_Descripcion] VARCHAR(20) ,
  [Tiempo_Mes_Corto] VARCHAR(5) ,
  [Tiempo_Quincena] VARCHAR(10) ,
  [Tiempo_Semana] INTEGER ,
  [Tiempo_Dia_Numero] INTEGER ,
  [Tiempo_Dia_Descripcion] VARCHAR(20) ,
  [Tiempo_Dia_Corto] VARCHAR(5) ,
  [Tiempo_Dia_Anio] INTEGER ,
  [Tiempo_Dia_Habil] VARCHAR(5) ,
  [Tiempo_Ejercicio_Fiscal] VARCHAR(10) , 
 PRIMARY KEY ([Tiempo_Key])
) ON [PRIMARY]
GO

CREATE TABLE [FERIADOS] (
  [Feriado_Key] INTEGER IDENTITY (1, 1) ,
  [Feriado_Region] INTEGER ,
  [Feriado_Tiempo] INTEGER ,
  [Feriado_Fecha] DATE,
  [Feriado_Descripcion] VARCHAR(50) ,
  [Feriado_Laborable] VARCHAR(2) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Feriado_Key])
) ON [PRIMARY]
GO

CREATE TABLE [HORAS] (
  [Hora_Key] INTEGER IDENTITY (1, 1) ,
  [Hora_Tipo] INTEGER ,
  [Hora_Tiempo] INTEGER ,
  [Hora_Usuario] INTEGER ,
  [Hora_Cantidad] INTEGER ,
  [Hora_Proyecto] INTEGER ,
  [Hora_Adjunto] VARCHAR(1000) ,
  [Hora_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Hora_Key])
) ON [PRIMARY]
GO

CREATE TABLE [REGIONES] (
  [Region_Key] INTEGER IDENTITY (1, 1) ,
  [Region_Region_Agrupada] INTEGER ,
  [Region_Codigo] VARCHAR(50) ,
  [Region_Descripcion] VARCHAR(100) ,
  [Region_Moneda] INTEGER, 
  [Region_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Region_Key])
) ON [PRIMARY]
GO

CREATE TABLE [REGIONES_AGRUPADAS] (
  [Region_Agrupada_Key] INTEGER IDENTITY (1, 1) ,
  [Region_Agrupada_Codigo] VARCHAR(50) ,
  [Region_Agrupada_Descripcion] VARCHAR(100) ,
  [Region_Agrupada_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Region_Agrupada_Key])
) ON [PRIMARY]
GO

CREATE TABLE [ROLES_PERMISOS] (
  [Rol_Permiso_Key] INTEGER IDENTITY (1, 1) ,
  [Rol_Permiso_Rol] INTEGER ,
  [Rol_Permiso_Permiso] INTEGER , 
 PRIMARY KEY ([Rol_Permiso_Key])
) ON [PRIMARY]
GO

CREATE TABLE [PARAMETROS] (
  [id] INTEGER IDENTITY (1, 1) , 
 PRIMARY KEY ([id])
) ON [PRIMARY]
GO

CREATE TABLE [ESTADOS] (
  [Estado_Key] INTEGER IDENTITY (1, 1) ,
  [Estado_Codigo] VARCHAR(10) ,
  [Estado_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Estado_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES_PROYECTOS] (
  [Colaborador_Proyecto_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Proyecto_Colaborador] INTEGER ,
  [Colaborador_Proyecto_Proyecto] INTEGER ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Colaborador_Proyecto_Key])
) ON [PRIMARY]
GO

CREATE TABLE [EMPRESAS] (
  [Empresa_Key] INTEGER IDENTITY (1, 1) ,
  [Empresa_Codigo] VARCHAR(50) ,
  [Empresa_Descripcion] VARCHAR(100) ,
  [Empresa_Tipo] INTEGER ,
  [Empresa_Identificador_Laboral] INTEGER ,
  [Empresa_Logo] VARCHAR(1000),
  [Empresa_Observacion] VARCHAR(1000) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Empresa_Key])
) ON [PRIMARY]
GO

CREATE TABLE [TIPOS_EMPRESAS] (
  [Tipo_Empresa_Key] INTEGER IDENTITY (1, 1) ,
  [Tipo_Empresa_Codigo] VARCHAR(10) ,
  [Tipo_Empresa_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Tipo_Empresa_Key])
) ON [PRIMARY]
GO

CREATE TABLE [INDUSTRIAS] (
  [Industria_Key] INTEGER IDENTITY (1, 1) ,
  [Industria_Codigo] VARCHAR(10) ,
  [Industria_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME ,
  [Visible] VARCHAR(2), 
 PRIMARY KEY ([Industria_Key])
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[CLIENTES_FISCALES](
	[Cliente_Fiscal_Key] [int] IDENTITY(1,1) NOT NULL,
	[Cliente_Fiscal_Codigo] [varchar](10) NULL,
	[Cliente_Fiscal_Descripcion] [varchar](50) NULL,
	[Cliente_Fiscal_Cliente] [int] NULL,
	[Cliente_Fiscal_Tipo_ID_Fiscal] [varchar](10) NULL,
	[Cliente_Fiscal_Identificador_Fiscal] [varchar](30) NULL,
	[Cliente_Fiscal_IIBB] [varchar](30) NULL,
	[Cliente_Fiscal_Direccion] [varchar](100) NULL,
	[Cliente_Fiscal_Telefono] [varchar](50) NULL,
	[Cliente_Fiscal_Giro_Negocio] [varchar](100) NULL,
	[Cliente_Fiscal_Moneda_Principal] [int] NULL,
	[Cliente_Fiscal_Moneda_Secundaria] [int] NULL,
	[Cliente_Fiscal_Mail_Para] [varchar](1000) NULL,
	[Cliente_Fiscal_Mail_Copia] [varchar](1000) NULL,
	[Cliente_Fiscal_Direccion_Factura] [varchar](100) NULL,
	[Cliente_Fiscal_Mail_Pagos] [varchar](100) NULL,
	[Cliente_Fiscal_Telefono_Pagos] [varchar](50) NULL,
	[Cliente_Fiscal_Predeterminado] [varchar](5) NULL,
	[Usuario_Creacion] [int] NULL,
	[Usuario_Modificacion] [int] NULL,
	[Fecha_Creacion] [datetime] NULL,
	[Fecha_Modificacion] [datetime] NULL,
	[Visible] [varchar](2) NULL,
 PRIMARY KEY ([Cliente_Fiscal_Key])
) ON [PRIMARY]
GO

CREATE TABLE [FACTURABLES] (
  [Facturable_Key] INTEGER IDENTITY (1, 1) ,
  [Facturable_Codigo] VARCHAR(50) ,
  [Facturable_Descripcion] VARCHAR(100) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Facturable_Key])
) ON [PRIMARY]
GO

CREATE TABLE [PROYECTOS_TECNOLOGIAS] (
  [Proyecto_Tecnologia_Key] INTEGER IDENTITY (1, 1) ,
  [Proyecto_Tecnologia_Proyecto] INTEGER ,
  [Proyecto_Tecnologia_Tecnologia] INTEGER ,
  [Proyecto_Tecnologia_Porcentaje]	FLOAT ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
 PRIMARY KEY ([Proyecto_Tecnologia_Key])
) ON [PRIMARY]
GO

CREATE TABLE [PROYECTOS_TIPOS] (
  [Proyecto_Tipo_Key] INTEGER IDENTITY (1, 1) ,
  [Proyecto_Tipo_Codigo] VARCHAR(10) ,
  [Proyecto_Tipo_Descripcion] VARCHAR(50) ,
  [Proyecto_Tipo_Grupo] VARCHAR(50) ,
  [Proyecto_Tipo_Beneficio] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2),
 PRIMARY KEY ([Proyecto_Tipo_Key])
) ON [PRIMARY]
GO

CREATE TABLE [COLABORADORES_AREAS] (
  [Colaborador_Area_Key] INTEGER IDENTITY (1, 1) ,
  [Colaborador_Area_Codigo] VARCHAR(10) ,
  [Colaborador_Area_Descripcion] VARCHAR(50) ,
  [Usuario_Creacion] INTEGER ,
  [Usuario_Modificacion] INTEGER ,
  [Fecha_Creacion] DATETIME ,
  [Fecha_Modificacion] DATETIME , 
  [Visible] VARCHAR(2)
 PRIMARY KEY ([Colaborador_Area_Key])
) ON [PRIMARY]
GO

ALTER TABLE [USUARIOS] ADD FOREIGN KEY (Usuario_Rol) REFERENCES [ROLES] ([Rol_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Usuario) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Region) REFERENCES [REGIONES] ([Region_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Area) REFERENCES [COLABORADORES_AREAS] ([Colaborador_Area_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Puesto) REFERENCES [COLABORADORES_PUESTOS] ([Colaborador_Puesto_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Tipo) REFERENCES [TIPOS_COLABORADORES] ([Tipo_Colaborador_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Empresa) REFERENCES [EMPRESAS] ([Empresa_Key]);
				
ALTER TABLE [COLABORADORES] ADD FOREIGN KEY (Colaborador_Estado) REFERENCES [ESTADOS] ([Estado_Key]);
				
ALTER TABLE [COLABORADORES_HORAS] ADD FOREIGN KEY (Colaborador_Hora_Usuario) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [COLABORADORES_HOME_OFFICE] ADD FOREIGN KEY (Colaborador_Home_Usuario) REFERENCES [USUARIOS] ([Usuario_Key]);
	
ALTER TABLE [COTIZACIONES] ADD FOREIGN KEY (Cotizacion_Moneda_Origen) REFERENCES [MONEDAS] ([Moneda_Key]);
				
ALTER TABLE [COTIZACIONES] ADD FOREIGN KEY (Cotizacion_Moneda_Destino) REFERENCES [MONEDAS] ([Moneda_Key]);
				
ALTER TABLE [CLIENTES] ADD FOREIGN KEY (Cliente_Region) REFERENCES [REGIONES] ([Region_Key]);
				
ALTER TABLE [CLIENTES] ADD FOREIGN KEY (Cliente_Industria) REFERENCES [INDUSTRIAS] ([Industria_Key]);
		
ALTER TABLE [CLIENTES] ADD FOREIGN KEY (Cliente_Moneda_Principal) REFERENCES [MONEDAS] ([Moneda_Key]);
				
ALTER TABLE [CLIENTES] ADD FOREIGN KEY (Cliente_Empresa) REFERENCES [EMPRESAS] ([Empresa_Key]);

				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Unidad_Negocio) REFERENCES [UNIDADES_NEGOCIOS] ([Unidad_Negocio_Key]);			
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Facturable) REFERENCES [FACTURABLES] ([Facturable_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Alcance) REFERENCES [PROYECTOS_ALCANCES] ([Proyecto_Alcance_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Tipo) REFERENCES [PROYECTOS_TIPOS] ([Proyecto_Tipo_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Cliente) REFERENCES [CLIENTES] ([Cliente_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Moneda) REFERENCES [MONEDAS] ([Moneda_Key]); 
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Responsable) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Responsable) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [PROYECTOS] ADD FOREIGN KEY (Proyecto_Vendedor) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [TECNOLOGIAS] ADD FOREIGN KEY (Tecnologia_Tipo) REFERENCES [TIPOS_TECNOLOGIAS] ([Tipo_Tecnologia_Key]);
				
ALTER TABLE [TAREAS] ADD FOREIGN KEY (Tarea_Proyecto) REFERENCES [PROYECTOS] ([Proyecto_Key]);
				
ALTER TABLE [TAREAS] ADD FOREIGN KEY (Tarea_Hora) REFERENCES [HORAS] ([Hora_Key]);
				
ALTER TABLE [FERIADOS] ADD FOREIGN KEY (Feriado_Region) REFERENCES [REGIONES] ([Region_Key]);
				
ALTER TABLE [FERIADOS] ADD FOREIGN KEY (Feriado_Tiempo) REFERENCES [TIEMPOS] ([Tiempo_Key]);
				
ALTER TABLE [HORAS] ADD FOREIGN KEY (Hora_Tipo) REFERENCES [HORAS_TIPOS] ([Hora_Tipo_Key]);
				
ALTER TABLE [HORAS] ADD FOREIGN KEY (Hora_Tiempo) REFERENCES [TIEMPOS] ([Tiempo_Key]);
				
ALTER TABLE [HORAS] ADD FOREIGN KEY (Hora_Usuario) REFERENCES [USUARIOS] ([Usuario_Key]);

ALTER TABLE [CLIENTES_FISCALES] ADD FOREIGN KEY (Cliente_Fiscal_Cliente) REFERENCES [CLIENTES] ([Cliente_Key]);
				
ALTER TABLE [REGIONES] ADD FOREIGN KEY (Region_Region_Agrupada) REFERENCES [REGIONES_AGRUPADAS] ([Region_Agrupada_Key]);

ALTER TABLE [REGIONES] ADD FOREIGN KEY (Region_Moneda) REFERENCES [MONEDAS] ([Moneda_Key]);
				
ALTER TABLE [REGIONES_AGRUPADAS] ADD FOREIGN KEY (Region_Agrupada_Responsable) REFERENCES [USUARIOS] ([Usuario_Key]);
				
ALTER TABLE [ROLES_PERMISOS] ADD FOREIGN KEY (Rol_Permiso_Rol) REFERENCES [ROLES] ([Rol_Key]);
				
ALTER TABLE [ROLES_PERMISOS] ADD FOREIGN KEY (Rol_Permiso_Permiso) REFERENCES [PERMISOS] ([Permiso_Key]);
				
ALTER TABLE [COLABORADORES_PROYECTOS] ADD FOREIGN KEY (Colaborador_Proyecto_Colaborador) REFERENCES [COLABORADORES] ([Colaborador_Key]);
				
ALTER TABLE [COLABORADORES_PROYECTOS] ADD FOREIGN KEY (Colaborador_Proyecto_Proyecto) REFERENCES [PROYECTOS] ([Proyecto_Key]);
				
ALTER TABLE [EMPRESAS] ADD FOREIGN KEY (Empresa_Tipo) REFERENCES [TIPOS_EMPRESAS] ([Tipo_Empresa_Key]);
						
ALTER TABLE [PROYECTOS_TECNOLOGIAS] ADD FOREIGN KEY (Proyecto_Tecnologia_Proyecto) REFERENCES [PROYECTOS] ([Proyecto_Key]);
				
ALTER TABLE [PROYECTOS_TECNOLOGIAS] ADD FOREIGN KEY (Proyecto_Tecnologia_Tecnologia) REFERENCES [TECNOLOGIAS] ([Tecnologia_Key]);

