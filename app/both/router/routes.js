/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.map(function() {

  this.route('Home', {
    path: '/'
  });

  this.route('AlwaysBlank', {
    path: '/always_blank'
  });

  this.route('AlwaysVisible', {
    path: '/always_visible'
  });
  
  this.route('Basic', {
    path: '/basic'
  });

  this.route('BlockTags', {
    path: '/block_tags'
  });

  this.route('CustomButtons', {
    path: '/custom_buttons'
  });

  this.route('CharactersCounter', {
    path: '/characters_counter'
  });

  this.route('CustomBlockStyles', {
    path: '/custom_block_styles'
  });

  this.route('CustomDropdown', {
    path: '/custom_dropdown'
  });

  this.route('CustomizeButtonIcons', {
    path: '/customize_button_icons'
  });

  this.route('DirectionBasicMode', {
    path: '/direction_basic_mode'
  });

  this.route('ImageButtons', {
    path: '/image_buttons'
  });

  this.route('Icons', {
    path: '/icons'
  });

  this.route('Height', {
    path: '/height'
  });

  this.route('FocusOnEditor', {
    path: '/focus_on_editor'
  });

  this.route('FileUpload', {
    path: '/file_upload'
  });

  this.route('Empty', {
    path: '/empty'
  });

  this.route('FontFamily', {
    path: '/font_family'
  });

  this.route('DisableButton', {
    path: '/disable_button'
  });

  this.route('DirectionInlineMode', {
    path: '/direction_inline_mode'
  });

  this.route('ImageLinkDisabled', {
    path: '/image_link_disabled'
  });

  this.route('ImageUploadDisabled', {
    path: '/image_upload_disabled'
  });

  this.route('InitOnButton', {
    path: '/init_on_button'
  });

  this.route('InitOnClick', {
    path: '/init_on_click'
  });

  this.route('InitOnImage', {
    path: '/init_on_image'
  });

  this.route('InitOnImageWithLink', {
    path: '/init_on_image_with_link'
  });

  this.route('InitOnLink', {
    path: '/init_on_link'
  });

  this.route('InitOnLinkUnlinkButtonDisabled', {
    path: '/init_on_link_unlink_button_disabled'
  });

  this.route('InitOnLinkWithLinkText', {
    path: '/init_on_link_with_link_text'
  });

  this.route('InitWithoutImageAndLink', {
    path: '/init_without_image_and_link'
  });

  this.route('Inline', {
    path: '/inline'
  });

  this.route('InlineWithNoButtons', {
    path: '/inline_with_no_buttons'
  });

  this.route('Language', {
    path: '/language'
  });

  this.route('MediaManagerDisabled', {
    path: '/media_manager_disabled'
  });

  this.route('MinHeight', {
    path: '/min_height'
  });

  this.route('ParagraphyDisabled', {
    path: '/paragraphy_disabled'
  });

  this.route('PlainPaste', {
    path: '/plain_paste'
  });

  this.route('UploadPastedImages', {
    path: '/upload_pasted_images'
  });

  this.route('TwoEditors', {
    path: '/two_editors'
  });

  this.route('ToolbarFixed', {
    path: '/toolbar_fixed'
  });

  this.route('ToolbarCustomization', {
    path: '/toolbar_customization'
  });

  this.route('Textarea', {
    path: '/textarea'
  });

  this.route('TextNearImage', {
    path: '/text_near_image'
  });

  this.route('Table', {
    path: '/table'
  });

  this.route('TabSpacesDisabled', {
    path: '/tab_spaces_disabled'
  });

  this.route('SimpleAmpersand', {
    path: '/simple_ampersand'
  });

  this.route('ShortcutsAvailable', {
    path: '/shortcuts_available'
  });

  this.route('PredefinedLinkList', {
    path: '/predefined_link_list'
  });

});
