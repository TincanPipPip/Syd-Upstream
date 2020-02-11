Provides all necessary configuration files (migrate config, CT, ECK, admin view etc),
dependencies and code to run a Spektrix-based venue site. 

Variables for Event template
----------------------------

Variables are created in spektrix_import_preprocess_node(&$variables) provide
the Event twig template with necessary parameters to display booking links, including
label overrides and modal link. Variables are:

  multiple_perf (bool): whether the event has multiple performances referencing it

  booking_link (string): complete HTML for booking link. Displays a modal link if 
                         multiple_perf is true, simple link to booking iframe otherwise

  pastEvent (bool): whether the event's run date is in the past

  at_time (time): time of event

  at_date (date): date of event

  startdate (date): start date of event

  enddate (date): end date of event

  year (date): year of event

  day (date): day of event

  do_time (time): doors open time - imported from Spektrix Attribute


Example of using variables
--------------------------

  {% if not pastEvent %} -- if this is not a past event, output the booking link
      {% if content.field_booking_label|render %} -- if the booking label field is not empty
          {% if content.field_event_booking|render %} -- if the booking link field is not empty
              <a href="{{ content.field_event_booking }}" title="{{ content.field_booking_label }}" class="btn book">{{ content.field_booking_label }}</a>
          {% else %} -- default to normal booking link, using overridden booking label
              <span class="btn alt">{{ content.field_booking_label }}</span>
          {% endif %}
      {% else %} -- default to using the predefined booking label & link
          <span class="booking">
              {{ booking_link }}
          </span>
      {% endif %}
  {% endif %}

