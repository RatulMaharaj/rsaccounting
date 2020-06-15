---
title: Contact
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >-
      Hi there! Thank you so much for your interest in working together. Please
      fill the contact form below or send us an email at
      [sarge@rsaccounting.co.za](mailto:sarge@rsaccounting.co.za).
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - type: textarea
        name: message
        label: Message
        default_value: Your message
      - type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
template: advanced
---
