We provide three helpful constants that can be used in the include_columns and exclude_columns options:

    `$invoca_custom_columns` a dynamic constant that represents the current list of your Custom Data Fields. Note: If the list of custom columns changes, those changes will be included in future API calls that use "include_columns=$invoca_custom_columns", independent of the API version. See Custom Data Parameters section for more details.

    `$invoca_custom_source_columns` a dynamic constant that represents the sources for the current list of your Custom Data Fields. Note: If the list of custom columns changes, those changes will be included in future API calls that use "include_columns=$invoca_custom_source_columns", independent of the API version. See Custom Data Parameters section for more details.

    `$invoca_default_columns` represents the default set of columns provided by the Transactions API for your requested version
