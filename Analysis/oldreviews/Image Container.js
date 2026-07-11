/* Image Container */
.image-upload-wrapper {
  margin-top: 20px;
  border: 1px dashed var(--border);
  border-radius: 4px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.preview-img {
  max-width: 100%;
  display: block;
  border-radius: 2px;
}

.upload-btn {
  background: var(--surface);
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 8px 15px;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: 'Space Mono';
  font-size: 12px;
}

.upload-btn:hover { color: var(--gold); border-color: var(--gold); }

/* Hide the actual file input */
.file-input { display: none; }