const es = {
  message: {
    new_connection: 'Nueva Conexión',
    refresh_connection: 'Refrescar',
    edit_connection: 'Editar Conexión',
    duplicate_connection: 'Copiar Conexión',
    del_connection: 'Eliminar Conexión',
    close_connection: 'Cerrar Conexión',
    add_new_line: 'Añadir Nueva Linea',
    dump_to_clipboard: 'Copiar como comando',
    redis_version: 'Versión Redis',
    process_id: 'ID Proceso',
    used_memory: 'Memoria Usada',
    used_memory_peak: 'Pico Memoria Usada',
    used_memory_lua: 'Lua Memoria Usada',
    connected_clients: 'Clientes Conectados',
    total_connections_received: 'Conexiones Totales',
    total_commands_processed: 'Comandos Totales',
    key_statistics: 'Estadisticas Clave',
    all_redis_info: 'Toda Información Redis',
    server: 'Servidor',
    memory: 'Memoria',
    stats: 'Estadísticas',
    settings: 'Ajustes',
    ui_settings: 'Apariencia',
    feature_settings: 'Función',
    common_settings: 'General',
    confirm_to_delete_row_data: '¿Seguro quiere eliminar los datos de la fila?',
    delete_success: 'Eliminado Correcto',
    delete_failed: 'Eliminado Fallido',
    modify_success: 'Modificación Correcta',
    modify_failed: 'Modificación Fallida',
    add_success: 'Añadido Correctamente',
    add_failed: 'Añadido Fallido',
    value_exists: 'Valor ya existente',
    value_not_exists: 'El valor no existe',
    refresh_success: 'Refresco Correcto',
    click_enter_to_rename: 'Permite cambiar el nombre después de hacer clic o presionar Enter para cambiar el nombre',
    switch_enable_rename: 'Permitir / deshacer el renombre',
    click_enter_to_ttl: 'lick o Presiona Enter para Modificar el TTL',
    confirm_to_delete_key: '¿Confirma eliminar {key} ?',
    confirm_to_rename_key: 'Confirma renombrar {old} -> {new} ?',
    edit_line: 'Editar Linea',
    auto_refresh: 'Auto Refresco',
    auto_refresh_tip: 'Auto Refresco Switch, Refrescar cara {interval} segundos',
    key_not_exists: 'Clave no existe',
    collapse_all: 'Contraer Todo',
    expand_all: 'Expandir All',
    json_format_failed: 'Error al parsear el Json',
    msgpack_format_failed: 'Error al parsear Msgpack',
    php_unserialize_format_failed: 'Error al deserializar PHP',
    clean_up: 'Limpiar',
    redis_console: 'Consola Redis',
    confirm_to_delete_connection: '¿Confirma eliminar la conexión?',
    connection_exists: 'Configuración de conexión ya existe',
    close_to_edit_connection: 'Debe cerrar la conexión antes de editar',
    close_to_connection: '¿Confirma cerrar la conexión?',
    ttl_delete: 'Ajustar TTL<=0 eliminará la clave directamente',
    max_page_reached: 'Página máxima alcanzada',
    add_new_key: 'Nueva Clave',
    enter_new_key: 'Ingrese su nuevo nombre de clave primero',
    key_type: 'Tipo de Clave',
    save: 'Guardar',
    enter_to_search: 'Enter para buscar',
    export_success: 'Exportación Correcta',
    select_import_file: 'Selecciona el Fichero',
    import_success: 'Importación Correcta',
    put_file_here: 'Suelta un fichero aquí o Pincha en Seleccionar',
    config_connections: 'Conexiones',
    import: 'Importar',
    export: 'Exportar',
    open: 'Abrir',
    close: 'Cerrar',
    open_new_tab: 'Abrir en nueva Pestaña',
    exact_search: 'Búsqueda exacta',
    enter_to_exec: 'Presione Enter para ejecutar comandos, arriba y abajo para cambiar el historial',
    pre_version: 'Versión',
    manual_update: 'Descarga Manual',
    retry_too_many_times: 'Demasiados intentos de reconexión. Verifique el estado del servidor',
    key_to_search: 'Búsqueda por palabra clave',
    search_connection: 'Conexión de búsqueda',
    begin_update: 'Actualizar',
    ignore_this_version: 'Ignorar esta versión',
    check_update: 'Comprobar actualizaciones',
    update_checking: 'Comprobando actualizaciones, espere un momento...',
    update_available: 'Nueva Versión Encontrada',
    update_not_available: 'Tu versión está actualizada',
    update_error: 'Actualización Fallida',
    update_downloading: 'Descargando...',
    update_download_progress: 'Progreso de la descarga',
    update_downloaded: 'Descarga de actualización completada, por favor, reinicia la aplicaicón.\
    [Consejo]: Si está utilizando Windows, después de cerrar la aplicación, espere que el ícono del escritorio se actualice a un estado normal (alrededor de 10 segundos) y luego puede volver a abrirlo',
    mac_not_support_auto_update: 'Mac no soporte actualizaciones automáticas. Manualmente puede <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">Descargarla</a> y reinstalarla,\
    o ejecute <br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️si es útil para ti, puedes patronizarnos a través de <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, y AppStore lo actualizará automáticamente por usted.',
    font_family: 'Familia de la Fuente',
    font_faq_title: 'Instrucciones Ajuste Fuente',
    font_faq: '1. Se pueden configurar varias fuentes<br>\
    2. La selección de fuentes es ordenada. Se sugiere elegir primero la fuente en inglés y luego la fuente en su idioma<br>\
    3. Cuando la lista de fuentes del sistema no se puede cargar en algunos casos excepcionales, puede ingresar el nombre de la fuente instalada manualmente.',
    private_key_faq: 'Se admite la clave privada en formato RSA, que comienza con <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    y comienza con<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> necesita convertir el formato a través de <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>Esta operación no afectará el inicio de sesión de clave privada anterior',
    dark_mode: 'Modo Oscuro',
    load_more_keys: 'cargar más',
    key_name: 'Nombre Clave',
    project_home: 'Home Proyecto',
    cluster_faq: 'Seleccione cualquier nodo en el clúster para completar, y otros nodos se identificarán automáticamente.',
    redis_status: 'Redis Info',
    confirm_flush_db: '¿Confirmar para eliminar todas las claves en db{db} ?',
    flushdb: 'Vaciar DB',
    flushdb_prompt: 'Input "{txt}"',
    info_disabled: 'Excepción de ejecución de comando de información (puede haberse deshabilitado), no se puede mostrar la información de redis',
    page_zoom: 'Zoom Página',
    scan_disabled: 'Excepción de ejecución de comando de escaneo (puede haberse deshabilitado), no se puede mostrar la lista de claves',
    key_type_not_support: 'La visualización visual no es compatible con este tipo. Utilice la consola',
    delete_folder: 'Escanear y eliminar toda la carpeta',
    multiple_select: 'Selección múltiple',
    copy: 'Copiar',
    copy_success: 'Copiado correcto',
    keys_to_be_deleted: 'Claves a ser eliminadas',
    delete_all: 'Eliminar todas',
    clear_cache: 'Limpiar Cache',
    mark_color: 'Color de marca',
    key_no_permission: 'El permiso de lectura de archivos ha caducado, vuelva a seleccionar el archivo clave manualmente',
    toggle_check_all: 'Seleccionar todos | Deseleccionar todos',
    select_lang: 'Seleccione el idioma',
    clear_cache_tip: 'Cuando hay un problema con el cliente, esta operación eliminará todas las conexiones y configuraciones para recuperar el cliente',
    detail: 'Detalle',
    separator_tip: 'El separador de la vista de árbol, establecido en vacío para deshabilitar el árbol y mostrar las teclas como una lista',
    confirm_modify_unvisible_content: 'El contenido contiene caracteres invisibles, puede editar de forma segura en la "Vista hexadecimal". Si continuar editando en la "Vista de texto" puede causar errores de codificación, ¿desea continuar?',
    keys_per_loading: 'Numeros por Carga',
    keys_per_loading_tip: 'El número de claves cargadas cada vez. Un ajuste demasiado grande puede afectar el rendimiento',
    host: 'Host',
    port: 'Puerto',
    username: 'Usuario',
    password: 'Password',
    connection_name: 'Nombre de la Conexión',
    separator: 'Separador',
    timeout: 'Timeout',
    private_key: 'Clave Privada',
    public_key: 'Clave Pública',
    authority: 'Autoridad',
    redis_node_password: 'Redis Node Password',
    master_group_name: 'Nombre Grupo Maestro',
    command_log: 'Log',
    sentinel_faq: 'Puede elegir uno de varios centinelas. Complete la configuración de Sentinel para la dirección, el puerto y la contraseña. La contraseña del nodo Redis es la contraseña del nodo maestro monitoreado por el centinela.',
    hotkey: 'Hot Key',
    persist: 'Eliminar tiempo expiración',
    custom_formatter: 'Formato Personalizado',
    edit: 'Editar',
    new: 'Nuevo',
    custom: 'Personalizar',
    hide_window: 'Ocultar Ventana',
    minimize_window: 'Minimizar Ventana',
    maximize_window: 'Maximizar Ventana',
    load_all_keys: 'Cargar todo',
    show_load_all_keys: 'Habilitar botón para cargar todas las claves',
    load_all_keys_tip: 'Cargue todas las claves a la vez. Si el número de claves es demasiado grande, el cliente puede atascarse. Por favor úsalo correctamente',
    tree_node_overflow: 'Demasiadas claves o carpetas, mantenga solo {num} para mostrar. Si su clave no está aquí, se recomienda una búsqueda aproximada o configure el separador para distribuir las claves en carpetas',
    connection_readonly: 'Modo de solo lectura. Prohibido agregar, editar y borrar',
    memory_analysis: 'Análisis de memoria',
    begin: 'Iniciar',
    pause: 'Pausar',
    restart: 'Reiniciar',
    max_display: 'Número máximo de visualizaciones:  {num}',
    max_scan: 'Número máximo de escaneos:  {num}',
    close_left: 'Cerrar pestañas izquierdas',
    close_right: 'Cerrar pestañas derechas',
    close_other: 'Cerrar otras pestañas',
    slow_log: 'Consulta lenta',
    load_current_folder: 'Cargar solo la carpeta actual',
    custom_name: 'Nombre personalizado',
  },
};

export default es;
