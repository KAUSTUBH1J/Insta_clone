import React, { useState } from 'react';
import CSSLoader from "../../functions/CSSLoader";
import axios from '../../utils/axiosConfig';

const PostUpload = () => {
    CSSLoader('assets/css/postUpload.css');

    const [postImage, setPostImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState('');

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!postImage) {
            setApiError('Please select an image.');
            return;
        }

        setIsSubmitting(true);
        setApiError('');

        const formData = new FormData();
        formData.append('image', postImage);
        formData.append('caption', caption);

        try {
            const response = await axios.post('/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Post uploaded successfully:', response.data);
            // Handle successful post upload (e.g., show a success message or redirect)
        } catch (error) {
            console.error('Error uploading post:', error);
            setApiError(error.response?.data?.message || 'An error occurred while uploading the post.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="post-upload-container">
            <form onSubmit={handleSubmit} className="post-upload-form">
                <div className="image-upload">
                    <label htmlFor="postImage" className="image-upload-label">
                        {postImage ? postImage.name : "Choose an image"}
                    </label>
                    <input 
                        type="file" 
                        id="postImage" 
                        accept="image/*" 
                        onChange={handleImageChange}
                    />
                </div>
                <div className="caption-input">
                    <textarea 
                        placeholder="Write a caption..." 
                        value={caption} 
                        onChange={handleCaptionChange} 
                        rows="3"
                    ></textarea>
                </div>
                {apiError && <div className="text-danger mb-3">{apiError}</div>}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Uploading...' : 'Upload Post'}
                </button>
            </form>
        </div>
    );
};

export default PostUpload;
