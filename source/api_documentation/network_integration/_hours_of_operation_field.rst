**"open_24_7"**: boolean. When true, the destination is always available. When false, schedules must be provided.

**"time_zone"**: string (required). Rails ActiveSupport timezone name (e.g., "Pacific Time (US & Canada)", "Eastern Time (US & Canada)", "Central Time (US & Canada)", "Mountain Time (US & Canada)", "Arizona"). See https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html for full list.

**"schedules"**: array of hashes (required when open_24_7 is false). Each schedule contains:

- **"day_of_week"**: string. Day of the week: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
- **"open_time"**: string. Opening time in HH:MM format (15-minute increments, e.g., "09:00").
- **"close_time"**: string. Closing time in HH:MM format (15-minute increments, e.g., "17:00").

Schedules cannot overlap. To remove hours of operation, pass null, empty string, empty array, or empty hash.
