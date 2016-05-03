Toolkit Library
===============

The Solutions Toolkit is a library of JavaScript functions to help facilitate advanced implementations.  The following functions can be leveraged only if you have PNAPI JS installed on your site and your Invoca network has been properly configured by an Invoca Customer Success or Implementation Manager.

*Note:* Any method preceded with an underscore is subject to change and should not be used.

Toolkit Functions
-----------------

readInvocaData
^^^^^^^^^^^^^^

Description:
""""""""""""

Searches the ``"invoca_session"`` cookie for a cached value. If the request is not found, it returns the default value or null if one is not passed.

Usage:
""""""""""

``Invoca.Tools.readInvocaData(key, defaultValue)``

Arguments:
""""""""""

``"key"`` is the name of the parameter to search for.

``"defaultValue"`` is the value returned if "key" is not found.



##############################################



setCookie
^^^^^^^^^^^^^^

Description:
""""""""""""
Sets a cookie at the current trueDomain.


Usage:
""""""""""

``Invoca.Tools.setCookie(cookieName, cookieValue, lifetimeInDays)``

Arguments:
""""""""""

``"cookieName"`` is the name of the cookie to be set.

``"cookieValue"`` is the value of the cookie to be set.

``"lifetimeInDays"`` is the number of days the cookie should live for.

readCookie
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will return the value of a requested cookie by passing the cookie name.


Usage:
""""""""""

``Invoca.Tools.readCookie(cookieName)``

Arguments:
""""""""""

``"cookieName"`` is the name of the cookie to read.



##############################################



parseReferrer
^^^^^^^^^^^^^^

Description:
""""""""""""
This function uses a ``campaignMapping`` hash to search the referrer for each key in the hash and will return its value as a campaign ID. If none are found, it will return the default value.


Usage:
""""""""""

``Invoca.Tools.parseReferrer(campaignMapping, defaultValue)``

Arguments:
""""""""""

``"campaignMapping"`` is a hash of strings to look for in the referrer. The key is what to look for, the value is the corresponding Campaign ID.

``"defaultValue"`` is a string of the fallback Campaign ID that should be returned when no keys are found.



##############################################



contains
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will search for a string inside another string. It will return true if it does and false if it does not.


Usage:
""""""""""

``Invoca.Tools.contains(haystack, needle)``

Arguments:
""""""""""

``"haystack"`` is the string to look in.

``"needle"`` is the string to look for.

Looking for a needle in a haystack!



##############################################



readUrl
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will search all query strings the the URL for a key name and return it's value.


Usage:
""""""""""

``Invoca.Tools.readUrl(key)``

Arguments:
""""""""""

``"key"`` = Name of the query string parameter to look for.



##############################################



deviceType
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will attempt to return the device type of the visitor.


Usage:
""""""""""

``Invoca.Tools.deviceType()``

Response:
""""""""""

``desktop``, ``mobile``, or ``tablet``.



##############################################



isMobile
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will decide if the visitor is on a mobile device.


Usage:
""""""""""

``Invoca.Tools.isMobile()``

Response:
""""""""""

``true`` when visitor is on a mobile phone or tablet.

``false`` when visitor is on desktop or unknown.



##############################################



waitFor
^^^^^^^^^^^^^^

Description:
""""""""""""
This function will wait for a function to return a value before executing the next code.


Usage:
""""""""""

``Invoca.Tools.waitFor(inputFunction, callbackFunction, defaultValue, maxWaitTime)``

Response:
""""""""""

``inputFuction`` must be a function, any value returned by this function will be considered true, so return null to try again. 

``callbackFunction`` must be a function, and is called with the found value or default value passed as an argument.

``defaultVaule`` is the value that will be passed into ``callbackFunction`` if ``inputFunction`` fails to return a value within the ``maxWaitTime``.

``maxWaitTime`` is the maximum amount of miliseconds to wait for ``inputFunction`` to return a value.

