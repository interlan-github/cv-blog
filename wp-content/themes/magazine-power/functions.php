<?php
/**
 * Theme functions and definitions
 *
 * @link https://codex.wordpress.org/Functions_File_Explained
 *
 * @package Magazine_Power
 */

if ( ! function_exists( 'magazine_power_setup' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function magazine_power_setup() {
		// Make theme available for translation.
		load_theme_textdomain( 'magazine-power', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// Enable support for Post Thumbnails on posts and pages.
		add_theme_support( 'post-thumbnails' );
		add_image_size( 'magazine-power-thumb', 370, 250 );
		add_image_size( 'magazine-power-large', 800, 600, true );

		// Register menu locations.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary Menu', 'magazine-power' ),
				'top'     => esc_html__( 'Top Menu', 'magazine-power' ),
				'footer'  => esc_html__( 'Footer Menu', 'magazine-power' ),
				'social'  => esc_html__( 'Social Menu', 'magazine-power' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'search-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'magazine_power_custom_background_args',
				array(
					'default-color' => 'f0f3f5',
					'default-image' => '',
				)
			)
		);

		// Enable support for selective refresh of widgets in Customizer.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Enable support for custom logo.
		add_theme_support(
			'custom-logo',
			array(
				'width'       => 300,
				'height'      => 300,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Load default block styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for responsive embeds.
		add_theme_support( 'responsive-embeds' );

		// Enable support for footer widgets.
		add_theme_support( 'footer-widgets', 4 );

		// Load Supports.
		require get_template_directory() . '/inc/support.php';
	}

endif;

add_action( 'after_setup_theme', 'magazine_power_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function magazine_power_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'magazine_power_content_width', 640 );
}

add_action( 'after_setup_theme', 'magazine_power_content_width', 0 );

/**
 * Register widget area.
 */
function magazine_power_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Primary Sidebar', 'magazine-power' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here to appear in your Primary Sidebar.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Secondary Sidebar', 'magazine-power' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Add widgets here to appear in your Secondary Sidebar.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Front Page Top Widget Area', 'magazine-power' ),
			'id'            => 'sidebar-front-page-top-widget-area',
			'description'   => esc_html__( 'Add widgets here to appear in Front Page Top Widget Area.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Front Page Middle Widget Area', 'magazine-power' ),
			'id'            => 'sidebar-front-page-widget-area',
			'description'   => esc_html__( 'Add widgets here to appear in Front Page Middle Widget Area.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Front Page Middle Right Widget Area', 'magazine-power' ),
			'id'            => 'sidebar-front-page-middle-right-widget-area',
			'description'   => esc_html__( 'Add widgets here to appear in Front Page Middle Right Widget Area.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Front Page Bottom Widget Area', 'magazine-power' ),
			'id'            => 'sidebar-front-page-bottom-widget-area',
			'description'   => esc_html__( 'Add widgets here to appear in Front Page Bottom Widget Area.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Header Right Widget Area', 'magazine-power' ),
			'id'            => 'header-right',
			'description'   => esc_html__( 'Add widgets here to appear in Header Right Widget Area.', 'magazine-power' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);
}

add_action( 'widgets_init', 'magazine_power_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function magazine_power_scripts() {
	$theme_version = wp_get_theme()->get( 'Version' );

	$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_enqueue_style( 'magazine-power-font-awesome', get_template_directory_uri() . '/third-party/font-awesome/css/all' . $min . '.css', '', '5.8.1' );

	wp_enqueue_style( 'magazine-power-google-fonts', magazine_power_fonts_url(), array(), '1.0.3' );

	wp_enqueue_style( 'jquery-sidr', get_template_directory_uri() . '/third-party/sidr/css/jquery.sidr.dark' . $min . '.css', '', '2.2.1' );

	wp_enqueue_style( 'jquery-slick', get_template_directory_uri() . '/third-party/slick/slick' . $min . '.css', '', '1.8.1' );

	wp_enqueue_style( 'magazine-power-style', get_stylesheet_uri(), array(), $theme_version );

	wp_enqueue_script( 'magazine-power-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix' . $min . '.js', array(), '20130115', true );

	wp_enqueue_script( 'jquery-sidr', get_template_directory_uri() . '/third-party/sidr/js/jquery.sidr' . $min . '.js', array( 'jquery' ), '2.2.1', true );

	wp_enqueue_script( 'jquery-easytabs', get_template_directory_uri() . '/third-party/easytabs/js/jquery.easytabs' . $min . '.js', array( 'jquery' ), '3.2.0', true );

	wp_enqueue_script( 'jquery-easy-ticker', get_template_directory_uri() . '/third-party/ticker/jquery.easy-ticker' . $min . '.js', array( 'jquery' ), '2.0', true );

	wp_enqueue_script( 'jquery-slick', get_template_directory_uri() . '/third-party/slick/slick' . $min . '.js', array( 'jquery' ), '1.8.1', true );

	wp_enqueue_script( 'magazine-power-custom', get_template_directory_uri() . '/js/custom' . $min . '.js', array( 'jquery' ), '1.0.2', true );

	$custom_args = array(
		'go_to_top_status' => ( true === magazine_power_get_option( 'go_to_top' ) ) ? 1 : 0,
	);

	wp_localize_script( 'magazine-power-custom', 'magazinePowerCustomOptions', $custom_args );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

add_action( 'wp_enqueue_scripts', 'magazine_power_scripts' );

/**
 * Enqueue admin scripts and styles.
 *
 * @since 1.0.0
 *
 * @param string $hook Hook suffix for the current admin page.
 */
function magazine_power_admin_scripts( $hook ) {
	$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	if ( in_array( $hook, array( 'post.php', 'post-new.php' ), true ) ) {
		wp_enqueue_style( 'magazine-power-metabox', get_template_directory_uri() . '/css/metabox' . $min . '.css', '', '1.0.0' );
		wp_enqueue_script( 'magazine-power-metabox', get_template_directory_uri() . '/js/metabox' . $min . '.js', array( 'jquery', 'jquery-ui-core', 'jquery-ui-tabs' ), '1.0.0', true );
	}

	if ( 'widgets.php' === $hook ) {
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'wp-color-picker' );
		wp_enqueue_media();
		wp_enqueue_style( 'magazine-power-custom-widgets-style', get_template_directory_uri() . '/css/widgets' . $min . '.css', array(), '1.0.0' );
		wp_enqueue_script( 'magazine-power-custom-widgets', get_template_directory_uri() . '/js/widgets' . $min . '.js', array( 'jquery' ), '1.0.0', true );
	}
}

add_action( 'admin_enqueue_scripts', 'magazine_power_admin_scripts' );

if ( ! function_exists( 'magazine_power_blocks_support' ) ) :
	/**
	 * Create add default blocks support
	 */
	function magazine_power_blocks_support() {
		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Add support for responsive embeds.
		add_theme_support( 'responsive-embeds' );

		// Add custom editor font sizes.
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => esc_html__( 'Small', 'magazine-power' ),
					'shortName' => esc_html__( 'S', 'magazine-power' ),
					'size'      => 14,
					'slug'      => 'small',
				),
				array(
					'name'      => esc_html__( 'Normal', 'magazine-power' ),
					'shortName' => esc_html__( 'M', 'magazine-power' ),
					'size'      => 18,
					'slug'      => 'normal',
				),
				array(
					'name'      => esc_html__( 'Large', 'magazine-power' ),
					'shortName' => esc_html__( 'L', 'magazine-power' ),
					'size'      => 42,
					'slug'      => 'large',
				),
				array(
					'name'      => esc_html__( 'Huge', 'magazine-power' ),
					'shortName' => esc_html__( 'XL', 'magazine-power' ),
					'size'      => 54,
					'slug'      => 'huge',
				),
			)
		);

		// Add support for custom color scheme.
		add_theme_support( 'editor-color-palette', array(
			array(
				'name'  => esc_html__( 'White', 'magazine-power' ),
				'slug'  => 'white',
				'color' => '#ffffff',
			),
			array(
				'name'  => esc_html__( 'Black', 'magazine-power' ),
				'slug'  => 'black',
				'color' => '#111111',
			),
			array(
				'name'  => esc_html__( 'Gray', 'magazine-power' ),
				'slug'  => 'gray',
				'color' => '#f4f4f4',
			),
			array(
				'name'  => esc_html__( 'Blue', 'magazine-power' ),
				'slug'  => 'blue',
				'color' => '1b8be0',
			),
			array(
				'name'  => esc_html__( 'Orange', 'magazine-power' ),
				'slug'  => 'orange',
				'color' => '#ee3333',
			),
		) );
	}
	add_action( 'after_setup_theme', 'magazine_power_blocks_support', 20 );
endif; //magazine_power_blocks_support

if ( ! function_exists( 'magazine_power_add_blocks_style' ) ) :
	/**
	 * Add Blocks Style
	 */
	function magazine_power_add_blocks_style() {
		// Theme block stylesheet.
		wp_enqueue_style( 'magazine-power-block-style', get_theme_file_uri( '/css/blocks.css' ), array( 'magazine-power-style' ), date( 'Ymd-Gis', filemtime( get_template_directory() . '/css/blocks.css' ) ) );
	}
	add_action( 'wp_enqueue_scripts', 'magazine_power_add_blocks_style' );
endif; //magazine_power_add_blocks_style

if ( ! function_exists( 'magazine_power_block_editor_styles' ) ) :
	/**
	 * Enqueue editor styles for Blocks
	 */
	function magazine_power_block_editor_styles() {
		// Block styles.
		wp_enqueue_style( 'magazine-power-block-editor-style', get_theme_file_uri( '/css/editor-blocks.css' ), null, date( 'Ymd-Gis', filemtime( get_template_directory() . '/css/editor-blocks.css' ) ) );

		// Add custom fonts.
		wp_enqueue_style( 'magazine-power-fonts', magazine_power_fonts_url(), array(), null );
	}
	add_action( 'enqueue_block_editor_assets', 'magazine_power_block_editor_styles' );
endif; //magazine_power_block_editor_styles

/**
 * Load init.
 */
require_once get_template_directory() . '/inc/init.php';
