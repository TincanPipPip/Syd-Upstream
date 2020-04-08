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
              <a href="{{ content.field_event_booking }}" title="{{ content.field_booking_label }}" class="a-btn a-btn--book">{{ content.field_booking_label }}</a>
          {% else %} -- default to normal booking link, using overridden booking label
              <span class="a-btn a-btn--alt">{{ content.field_booking_label }}</span>
          {% endif %}
      {% else %} -- default to using the predefined booking label & link
          <span class="a-booking">
              {{ booking_link }}
          </span>
      {% endif %}
  {% endif %}

Components
----------

Basket:
```
{{ attach_library('spektrix_import/spektrix_components_loader') }}
{{ attach_library('spektrix_import/spektrix_components') }}

<spektrix-basket-summary client-name="{{ spektrix_client }}" custom-domain="{{ custom_domain }}">
    <span data-basket-item-count></span> item(s)
    <br />
    Discount:
    <span data-basket-summary-currency></span>
    <span data-basket-summary-discount-total></span>
    <br />
    Total:
    <span data-basket-summary-currency></span>
    <span data-basket-summary-basket-total></span>
</spektrix-basket-summary>
```

Account
```
{{ attach_library('spektrix_import/spektrix_components_loader') }}
{{ attach_library('spektrix_import/spektrix_components') }}

<spektrix-login-status client-name="{{ spektrix_client }}" custom-domain="{{ custom_domain }}">
    <span data-logged-in-container style="display: none;">
        <a href="https://thetheatre.org/myaccount">
            <span data-logged-in-status-customer-first-name></span>
            <span data-logged-in-status-customer-last-name></span>
            (<span data-logged-in-status-customer-email-address></span>)
        </a>
    </span>
    <span data-logged-out-container>
        <a href="https://thetheatre.org/myaccount">Log in now</a>
    </span>
</spektrix-login-status>
```