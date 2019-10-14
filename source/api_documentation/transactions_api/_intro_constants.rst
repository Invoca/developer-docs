We provide two helpful constants that can be used in the include_columns and exclude_columns options:

    `$invoca_custom_columns` a dynamic constant that represents the current list of your Custom Data Fields. Note: If the list of custom columns changes, those changes will be included in future API calls that use "include_columns=$invoca_custom_columns", independent of the API version.

    `$invoca_default_columns` represents the default set of columns provided by the Transactions API for your requested version