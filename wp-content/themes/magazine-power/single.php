<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Magazine_Power
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<?php
			// Previous/next post navigation.
			the_post_navigation(
				array(
					'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'magazine-power' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( 'Next post:', 'magazine-power' ) . '</span> ' .
						'<span class="post-title">%title</span>',
					'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'magazine-power' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( 'Previous post:', 'magazine-power' ) . '</span> ' .
						'<span class="post-title">%title</span>',
				)
			);
			?>

			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;
			?>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
	/**
	 * Hook - magazine_power_action_sidebar.
	 *
	 * @hooked: magazine_power_add_sidebar - 10
	 */
	do_action( 'magazine_power_action_sidebar' );
?>
<?php
get_footer();
