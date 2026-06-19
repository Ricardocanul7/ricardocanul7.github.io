<template>
    <section class="bg-slate-950 text-white py-16">
        <LayoutContainer>
            <LayoutRow>
                <LayoutColumn span="5">
                    <div class="photo-container relative p-5 mx-auto">
                        <NuxtPicture 
                            format="avif,webp"
                            src="./images/home-about.webp"
                            height="400"
                            width="400"
                            :alt="$t('homeAbout.profilePhotoAlt')"
                            :img-attrs="{
                                class: 'rounded-lg border-2 border-violet-300/20',
                                fetchpriority: 'high'
                            }"
                        />
                        <div class="absolute bottom-0 right-0 w-fit bg-slate-950/40 backdrop-blur-xs border-t border border-violet-300/20 rounded-2xl">
                            <div class="flex flex-col gap-1 items-start justify-center p-5">
                                <div class="font-jakarta-sans text-3xl text-violet-300">
                                    4+
                                </div>
                                <p class="font-inter font-semibold text-sm">Years of experience</p>
                            </div>
                        </div>
                    </div>
                </LayoutColumn>
                <LayoutColumn span="7" class="flex flex-col justify-center text-center md:text-left">
                    <div class="content text-center lg:text-left">
                        <span class="uppercase text-emerald-300 font-semibold font-inter text-xs">{{ $t('homeAbout.title') }}</span>
                        <h2 class="text-2xl font-bold font-plus-jakarta-sans text-indigo-100 mb-4">
                            {{ $t('homeAbout.header') }}
                        </h2>
                        <p 
                            v-for="(paragraph, index) in $tm('homeAbout.description_paragraphs')"
                            :key="index"
                            class="font-inter text-base text-slate-300 mb-4"
                            v-html="$rt(paragraph)"
                        />
                    </div>
                </LayoutColumn>
            </LayoutRow>
        </LayoutContainer>
    </section>
</template>